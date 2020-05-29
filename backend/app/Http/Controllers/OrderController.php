<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use Illuminate\Support\Facades\Auth;
class OrderController extends Controller
{
    public function getAll()
    {
        try {
            $orders = Order::with(['products.categories','user'])->get();
            return response($orders);
        } catch (\Exception $e) {
           return response($e,500);
        }
    }
    public function insert(Request $request)
    {
try {
    $body = $request->validate([
        'deliveryDate'=>'required|date',
        'products'=> 'required|array',
    ]);
    $body['status']='pending';
    $body['user_id'] = Auth::id();
    dd($body);
    $products=$body['products'];
    unset($body['products']);
    $order= Order::create($body);
    $order->products()->attach($products);
    return response($order,201);
} catch (\Exception $e) {
    return response($e,500);
}
    }
}
