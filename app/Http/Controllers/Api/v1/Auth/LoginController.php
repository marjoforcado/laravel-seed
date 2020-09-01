<?php

namespace App\Http\Controllers\Api\v1\Auth;

use Route;
use App\Http\Controllers\Controller;
use App\Models\Passport\Client;
use App\User;
use Illuminate\Http\Request;

class LoginController extends \App\Http\Controllers\Auth\LoginController
{
    protected $client;

    /**
     * LoginController constructor.
     * @param Client $client
     */
    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    /**
     * Log out the user of the application.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        if ($request->user()) {
            $request->user()->token()->revoke();
        }

        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh(Request $request)
    {
        $client = $this->client->getPasswordGrantClient();

        $request->request->add([
            'grant_type' => 'refresh_token',
            'refresh_token' => $request->refreshToken,
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'scope' => '',
        ]);

        $proxy = Request::create(
            'oauth/token',
            'POST'
        );

        return Route::dispatch($proxy);
    }

    /**
     * Log in the user of the application.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|mixed
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
        $this->validateLogin($request);

        $user = User::where('email', $request->email)->firstOrFail();

        return $this->authenticated($request, $user);
    }

    /**
     * Authenticate user.
     *
     * @param Request $request
     * @param mixed $user
     * @return mixed
     */
    protected function authenticated(Request $request, $user)
    {
        $client = $this->client->getPasswordGrantClient();

        $request->request->add([
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $user->email,
            'password' => $request->password,
            'scope' => '',
        ]);

        $proxy = Request::create(
            'oauth/token',
            'POST'
        );

        return Route::dispatch($proxy);
    }
}
