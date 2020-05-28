<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//rutas user
Route::prefix('users')->group(function () {
    Route::post('/register', 'UserController@register');
    Route::post('/login', 'UserController@login');
      Route::middleware('auth:api')->group(function ()
        {
            Route::get('/logout','UserController@logout');
            Route::get('/info','UserController@getUserInfo');
        });
});

Route::prefix('products')->group(function () {
    Route::get('/', 'ProductController@getAll');

      Route::middleware('auth:api')->group(function (){
        Route::post('/', 'ProductController@insert');
        Route::put('/{id}', 'ProductController@update');
        Route::delete('/{id}', 'ProductController@delete');
        });
});
Route::prefix('categories')->group(function () {
    Route::get('/', 'CategoryController@getAll');
    Route::post('/', 'CategoryController@insert');
     
});
Route::prefix('orders')->group(function () {
  Route::get('/', 'OrderController@getAll');
  Route::post('/', 'OrderController@insert');
   
});
