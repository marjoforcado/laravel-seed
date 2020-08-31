<?php
Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function() {
    Route::apiResource('register', 'RegisterController')->only([
        'store',
    ]);

    Route::apiResource('login', 'LoginController')->only([
        'store',
    ]);
});
