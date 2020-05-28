<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
 
    protected $fillable = [
        'status',
        'deliveryDate',
        'user_id'
    ];
    public function user()
    {
       return $this->belongsTo('\App\User');
    }
    public function products()
    {
       return $this->belongsToMany('\App\Product');
    }
}
