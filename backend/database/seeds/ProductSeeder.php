<?php

use Carbon\Carbon;
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
    $products = [
      [
        'id' => null,
        'name' => 'Portatil Asus',
        'description' => 'Asus Rog Strix G531GT-BQ165 Intel Core i7-9750H/16GB/512GB SSD/GTX1650/15.6"',
        'price' => 899,
        'image_path' => 'asus.jpg',
        'category_id' => 1,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => null,
        'name' => 'Portatil Apple MacBook',
        'description' => 'Apple MacBook Air Intel Core i5/8GB/128GB SSD/13" Plateado',
        'price' => 889,
        'image_path' => 'mac.jpg',
        'category_id' => 1,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => null,
        'name' => 'PcCom',
        'description' => 'PcCom Silver AMD Ryzen 5 2600/16GB/240GB SSD+1TB/GTX1650',
        'price' => 662.14,
        'image_path' => 'torre.jpg',
        'category_id' => 1,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => null,
        'name' => 'Monitor LG',
        'description' => 'LG 27MK430H-B 27" LED IPS FullHD FreeSync',
        'price' => 139.98,
        'image_path' => 'monitor2.jpg',
        'category_id' => 2,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => null,
        'name' => 'Keyboard Newskill',
        'description' => 'Newskill Suiko Teclado Mecánico Gaming Full RGB Switch Kailh Red',
        'price' => 69.95,
        'image_path' => 'teclado.jpg',
        'category_id' => 2,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => null,
        'name' => 'Mouse Newskill',
        'description' => 'Newskill EOS Ratón Gaming Professional RGB 16000DPI
        ',
        'price' => 46.98,
        'image_path' => 'raton.jpg',
        'category_id' => 2,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => null,
        'name' => 'Speaker Logitech',
        'description' => 'Logitech Multimedia Speaker Z200 Negro
        ',
        'price' => 29.98,
        'image_path' => 'altavoz.jpg',
        'category_id' => 2,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => null,
        'name' => 'Play Station 4',
        'description' => 'Sony PlayStation 4 Pro 1TB + The Last of Us + Uncharted Collection + Uncharted 4 + El Legado Perdido',
        'price' => 449.95,
        'image_path' => 'play.jpg',
        'category_id' => 3
      ],
      [
        'id' => null,
        'name' => 'Nintendo Switch',
        'description' => 'Nintendo Switch Azul Neón/Rojo Neón V2',
        'price' => 374.66,
        'image_path' => 'nintendo.jpg',
        'category_id' => 3
      ],
      [
        'id' => null,
        'name' => 'FIFA 20',
        'description' => 'FIFA 2020 PS4',
        'price' => 61.16,
        'image_path' => 'fifa.jpg',
        'category_id' => 4
      ],
      [
        'id' => null,
        'name' => 'GTA V ',
        'description' => 'Grand Theft Auto V Premium Edition PS4',
        'price' => 22.69,
        'image_path' => 'gta.jpg',
        'category_id' => 4
      ],
      [
        'id' => null,
        'name' => 'Xbox One ',
        'description' => 'Microsoft Xbox One X 1TB + Star Wars Jedi: Fallen Order
        ',
        'price' => 499.95,
        'image_path' => 'xbox.jpg',
        'category_id' => 3
      ],
      [
        'id' => null,
        'name' => 'Seat Tempest',
        'description' => 'Tempest Conquer Silla Gaming Roja',
        'price' => 119.98,
        'image_path' => 'silla.jpg',
        'category_id' => 2,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => null,
        'name' => 'Animal Crossing',
        'description' => 'Animal Crossing: New Horizons Nintendo Switch Nintendo eShop',
        'price' => 49.95,
        'image_path' => 'animal.jpg',
        'category_id' => 4
      ],
      [
        'id' => null,
        'name' => 'Monitor AOC',
        'description' => 'AOC 24B1XH 23.8" LED IPS FullHD',
        'price' => 99.99,
        'image_path' => 'monitor1.jpg',
        'category_id' => 2,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),
      ],
      [
        'id' => null,
        'name' => 'Mario Kart ',
        'description' => 'Mario Kart 8 Deluxe Nintendo Switch',
        'price' => 46.95,
        'image_path' => 'mario.jpg',
        'category_id' => 4
      ],
      [
        'id' => null,
        'name' => 'Breath of the Wild',
        'description' => 'Legend of Zelda:Breath of the Wild Nintendo Switch
        ',
        'price' => 54.98,
        'image_path' => 'zelda.jpg',
        'category_id' => 4
      ],
      [
        'id' => null,
        'name' => 'Cyberpunk 2077',
        'description' => 'Cyberpunk 2077 Edición Day One Xbox One
        ',
        'price' => 59.90,
        'image_path' => 'cyber.jpg',
        'category_id' => 4
      ],
      [
        'id' => null,
        'name' => 'Call of Duty',
        'description' => 'Call of Duty Modern Warfare Xbox One
        ',
        'price' => 69.99,
        'image_path' => 'callofduty.jpg',
        'category_id' => 4
      ],
        [
          'id' => null,
          'name' => 'Portatil Lenovo',
          'description' => 'Lenovo Ideapad S145-15AST AMD A6-9225/8GB/256 GB SSD/15.6"',
          'price' => 279,
          'image_path' => 'portatilLenovo.jpg',
          'category_id' => 1,
          'created_at' => Carbon::now(),
          'updated_at' => Carbon::now(),
        ]
      ];
      foreach ($products as $product) {
      DB::table('products')->insert($product);
    }
  }
}
