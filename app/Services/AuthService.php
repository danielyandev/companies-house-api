<?php


namespace App\Services;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class AuthService
{
    protected $passportConfig;

    public function __construct()
    {
        $this->passportConfig = config('passport');
    }

    public function getToken($username, $password)
    {
        $data = [
            'grant_type' => 'password',
            'username' => $username,
            'password' => $password
        ];

        return $this->sendRequest($data);
    }

    public function refreshToken($refreshToken)
    {
        $data = [
            'grant_type' => 'refresh_token',
            'refresh_token' => $refreshToken
        ];

        return $this->sendRequest($data);
    }

    /**
     * Sending request this way because laravel sail is used
     * and neither Http facade nor Guzzle work
     *
     * @param $data
     * @return mixed
     */
    private function sendRequest($data)
    {
        $data['client_id'] = $this->passportConfig['password_client_id'];
        $data['client_secret'] = $this->passportConfig['password_client_secret'];
        $data['scope'] = '';

        request()->request->add($data);
        $request = Request::create(config('app.url') . '/oauth/token', 'POST');

        $response = Route::dispatch($request);
        return json_decode($response->content(), true);
    }
}
