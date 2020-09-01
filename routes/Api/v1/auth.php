<?php
use Illuminate\Http\Request;

Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function() {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('me', function (Request $request) {
            return $request->user();
        });
    });

    Route::apiResource('register', 'RegisterController')->only([
        'store',
    ]);

    Route::post('login', 'LoginController@login');
});
