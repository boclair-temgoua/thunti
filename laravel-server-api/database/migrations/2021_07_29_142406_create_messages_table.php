<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->string('ip')->nullable();
            $table->boolean('statusRed')->default(false);
            $table->unsignedBigInteger('userfromId')->nullable();
            $table->unsignedBigInteger('usertoId')->nullable();
            $table->longText('content')->nullable();
            $table->boolean('isDelete')->default(false);
            $table->date('createdAt')->default(now());
            $table->date('updatedAt')->default(now());
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
