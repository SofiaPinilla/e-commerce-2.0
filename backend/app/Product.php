<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'price',
        'description',
        'image_path',
        'category_id'
    ];
    public function category()
    {
       return $this->belongsTo('\App\Category');
    }
    public function order()
    {
       return $this->belongsToMany('\App\Order');
    }
    public function review()
    {
       return $this->hasMany('\App\Review');
    }
}
