<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PersonController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::get('/persons', [PersonController::class, 'index']);
Route::post('/store', [PersonController::class, 'store']);
Route::put('/persons/{person}', [PersonController::class, 'edit']);
Route::delete('/persons/{person}', [PersonController::class, 'destroy']);
