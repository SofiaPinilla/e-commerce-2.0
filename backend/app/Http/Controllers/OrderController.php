<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;

class OrderController extends Controller
{
    public function getAll()
    {
        $orders = Order::with('products')->get();
        return response($orders, 201);
    }
    public function insert(Request $request)
    {
        $body = $request->all();//req.body
        // dump($body);//dump() y dd() son de laravel, var_dump() de php, dd() corta el flujo
        $order = Order::create($body);
        return response($order, 201);
    }
}
