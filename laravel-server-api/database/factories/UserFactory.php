<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\user;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(user::class, function (Faker $faker) {
    // $sexmodel = collect([
    //     ['name' => 'male'],
    //     ['name' => 'female'],
    // ]);
    $users =  [
        'username' => $faker->unique()->name(),
        'firstName' => $faker->firstName(),
        'lastName' => $faker->lastName(),
        'slug' => sha1(('YmdHis') . str_random(30)),
        // 'sex' => $sexmodel->shuffle()->first()['name'],
        'email' => $faker->unique()->email,
        // 'avatar' => $faker->imageUrl($width = 200, $height = 123),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
    ];
    return $users;
});