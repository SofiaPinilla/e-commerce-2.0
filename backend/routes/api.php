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
//routes contact
Route::post('contact-us','ContactUsController@contactUsPost');
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
    Route::get('/8', 'ProductController@getLimitProducts');
    Route::get('/price', 'ProductController@getByPriceAsc');
    Route::get('/price2', 'ProductController@getByPriceDesc');
    Route::get('/id/{id}', 'ProductController@getById');
    Route::get('/name/{search}', 'ProductController@getProductByName');
    Route::post('/', 'ProductController@insert');
    Route::middleware('auth:api')->group(function (){
      Route::post('/likes/{id}', 'ProductController@addProductLike');
      Route::delete('/unlike/{id}', 'ProductController@deleteProductLike');
    });
    Route::middleware(['auth:api','checkRole:admin'])->group(function (){
      Route::post('/', 'ProductController@insert');
      Route::post('/image/{id}','ProductController@uploadImage');
      Route::put('/{id}', 'ProductController@update');
        Route::delete('/{id}', 'ProductController@delete');
      });
});
Route::prefix('reviews')->group(function () {
  Route::get('/', 'ReviewController@getAll');
  Route::middleware('auth:api')->group(function (){
    Route::post('/{id}', 'ReviewController@insert');
      Route::put('/{id}', 'ReviewController@update');
      Route::delete('/{id}', 'ReviewController@delete');
      });
});
Route::prefix('categories')->group(function () {
    Route::get('/', 'CategoryController@getAll');
    Route::get('/name/{search}', 'CategoryController@getCategoryByName');
    Route::post('/', 'CategoryController@insert');
     
});
Route::prefix('orders')->group(function () {
  Route::get('/', 'OrderController@getAll');
  Route::middleware('auth:api')->group(function (){
  Route::post('/', 'OrderController@insert');
});
});

Route::get('stripe', 'StripePaymentController@stripe');
Route::post('stripe', 'StripePaymentController@stripePost')->name('stripe.post');

