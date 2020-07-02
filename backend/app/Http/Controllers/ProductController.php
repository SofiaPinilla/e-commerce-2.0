<?php

namespace App\Http\Controllers;

use App\Product;
use App\WishList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{

    public function getAll()
    {
        $products = Product::with('review', 'category')->get();

        return response($products);
    }
    public function getLimitProducts()
    {
        $products = Product::orderBy('id', 'DESC')->get();
        $limit =$products->take(8);
        return response($limit, 201);
    }
    public function getByPriceAsc()
    {
        $products = Product::orderBy('price', 'ASC')->get();
        return response($products, 201);
    }
    public function getByPriceDesc()
    {
        $products = Product::orderBy('price', 'DESC')->get();
        return response($products, 201);
    }
    public function getById( $id)
    {
        $product = Product::with('review.user','likes','category')->find($id);
        return response($product, 201);
    }
    public function insert(Request $request)
    {
        try {
            $body = $request->validate([
                'name' => 'required|string',
                'price' => 'required',
                'description' => 'required|string',
                'img' => 'required|image',
                'category_id'=>'required'
            ]); 
            $imageName = time() . '-' . request()->img->getClientOriginalName();
            request()->img->move('images/products', $imageName); 
            $body['image_path'] = $imageName;
            $product = Product::create($body);
        } catch (\Exception $e) {
            return response($e,500);
        }

        return response($product, 201);
    }
    public function uploadImage(Request $request, $id)
    {
        try {
            $request->validate(['img' => 'required|image']);
            $product = Product::find($id); 
            $imageName = time() . '-' . request()->img->getClientOriginalName(); 
            request()->img->move('images/products', $imageName); 
            $product->update(['image_path' => $imageName]);
            return response($product);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            $body = $request->validate([
                'name' => 'string|max:40',
                'description' => 'string|max:250',
                'category_id' => 'integer'
            ]);
            $product = Product::find($id);
            $product->update($body);
            return response([
                'message' => 'Producto actualizado con éxito',
                'product' => $product
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    }
    public function delete($id)
    {
        try {
            $product = Product::find($id);
            $product->delete();
            return response([
                'message' => 'Producto eliminado con éxito',
                'product' => $product
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }
    public function getProductByName($search)
    {              
        $product = Product::with('category');                             
        $filter = $product->where('name','LIKE','%'.$search.'%')->get();
        return $filter;
    }
    public function addProductLike($id)
    {
        $body['user_id'] = Auth::id();
        $body['product_id'] = $id;
        $like = WishList::create($body);
        return response($like, 201);
    }
    public function deleteProductLike2($id)
    {
        try {
            $like = WishList::find($id);
            $like->delete();
            return response([
                'message' => 'Like eliminado con éxito',
                'Like' => $like
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }
    public function deleteProductLike($id){   
        $like = WishList::where('product_id', $id)
        ->where('user_id', Auth::id());
        $like->delete();
        return response([
            'message' => 'Borrado correctamente'
        ], 200);
    }
}
