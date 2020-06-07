<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAll()
    {
        $categories = Category::with('products')->get();
        return response($categories, 201);
    }
    public function insert(Request $request)
    {
        $body = $request->all();
        $category = Category::create($body);
        return response($category, 201);
    }
    public function getCategoryByName($search)
    {              
        $category = Category::with('products');                             
        $filter = $category->where('name','LIKE','%'.$search.'%')->get();
        return $filter;
    }
}
