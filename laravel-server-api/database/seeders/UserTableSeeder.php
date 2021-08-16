<?php

namespace Database\Seeders;

use App\Models\message;
use App\Models\user;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(user::class, 13)->create();
        factory(message::class, 1000)->create();

        // Output
        $this->command->info('Test data added.');
    }
}
