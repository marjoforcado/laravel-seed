<?php
Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function() {
    Route::apiResource('register', 'RegisterController')->only([
        'store',
    ]);
});
