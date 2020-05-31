<?php

namespace App\Http\Controllers;

use App\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function getAll()
    {
        $reviews = Review::with('product')->get();
        return response($reviews, 201);
    }
    public function insert(Request $request, $id)
    {
        try {
            $body = $request->validate([
                'review' => 'required|string'
            ]);
            $imageName = time() . '-' . request()->img->getClientOriginalName(); //time() es como Date.now()
            request()->img->move('images/products', $imageName); //mueve el archivo subido al directorio indicado (en este caso public path es dentro de la carpeta public)
            $body['image_path'] = $imageName;
            $body['product_id'] = $id;
            $body['user_id'] = Auth::id();
            $review = Review::create($body);
            return $review;
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            $data=$request->all();

            $review=review::find($id);
            if($request->has('review')) $review->review=$data["review"];
            
    
            $review->save();
    
            return $review;
           
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    }
    public function delete($id)
    {
        try {
            $review = review::find($id);
            $review->delete();
            return response([
                'message' => 'reviewo eliminado con éxito',
                'review' => $review
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }
}
