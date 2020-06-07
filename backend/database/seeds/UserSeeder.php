<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'id' => null,
                'name' => 'Admin',
                'role' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('123'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
              ]
        ]);
    }
}
