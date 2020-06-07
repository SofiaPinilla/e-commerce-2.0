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

        return response($products, 201);
    }
    public function getLimitProducts()
    {
        $products = Product::orderBy('id', 'DESC')->get();
        $limit =$products->take(8);
        return response($limit, 201);
    }
    public function getByPrice()
    {
        $products = Product::orderBy('price', 'ASC')->get();
        return response($products, 201);
    }
    public function getByPrice2()
    {
        $products = Product::orderBy('price', 'DESC')->get();
        return response($products, 201);
    }
    public function getById( $id)
    {
        $product = Product::with('review.user','likes')->find($id);
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
            ]); //req.body
            $imageName = time() . '-' . request()->img->getClientOriginalName(); //time() es como Date.now()
            request()->img->move('images/products', $imageName); //mueve el archivo subido al directorio indicado (en este caso public path es dentro de la carpeta public)
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
            // $request->validate(['imagen' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048']);
            $product = Product::find($id); //buscamos el producto a actualizar la ruta de la imagen
            $imageName = time() . '-' . request()->img->getClientOriginalName(); //time() es como Date.now()
            request()->img->move('images/products', $imageName); //mueve el archivo subido al directorio indicado (en este caso public path es dentro de la carpeta public)
            $product->update(['image_path' => $imageName]); //actualizamos el image_path con el nuevo nombre de la imagen
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
            $data = $request->all();

            $product = Product::find($id);
            if ($request->has('name')) $product->name = $data["name"];
            if ($request->has('price')) $product->price = $data["price"];
            if ($request->has('description')) $product->description = $data["description"];
            if ($request->has('category_id')) $product->category_id = $data["category_id"];

            $product->save();

            return $product;
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
