<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\message;
use Faker\Generator as Faker;

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

$factory->define(message::class, function (Faker $faker) {
    $messages =  [
        'statusRed' => mt_rand(0, 1),
        'userfromId' => mt_rand(1, 13),
        'usertoId' => mt_rand(1, 13),
        'createdAt' => mt_rand(2000, 2021).'-08-16',
        'content' => $faker->text,
    ];
    return $messages;
});