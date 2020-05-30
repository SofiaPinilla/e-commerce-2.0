<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getAll()
    {
        $products = Product::with('review','category')->get();
        return response($products, 201);
    }
    public function getById($id)
    {
        $product = Product::find($id);
        $category_name = $product->category->name;
        $review = $product->review[0]->review;
        $completeProduct = [$product, $category_name,$review];
        return response($completeProduct, 201);
    }
    public function insert(Request $request)
    {
        $body = $request->all();//req.body
        // dump($body);//dump() y dd() son de laravel, var_dump() de php, dd() corta el flujo
        $product = Product::create($body);
        return response($product, 201);
    }
    public function update(Request $request, $id)
    {
        try {
            $data=$request->all();

            $product=Product::find($id);
            if($request->has('name')) $product->name=$data["name"];
            if($request->has('price')) $product->price=$data["price"];
            if($request->has('description')) $product->description=$data["description"];
            if($request->has('category_id')) $product->category_id=$data["category_id"];
    
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
}
