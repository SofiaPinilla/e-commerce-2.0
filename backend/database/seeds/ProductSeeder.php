<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      {
        DB::table('products')->insert([
            [
                'name' => 'SciFi',
            ],
            [
                'name' => 'Thirller',
            ]
        ]);
      } 
    }
}
