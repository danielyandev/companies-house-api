<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Password grant access client id
    |--------------------------------------------------------------------------
    |
    | Can be checked in db
    |
    */
    'password_client_id' => env('PASSPORT_PASSWORD_GRANT_CLIENT_ID'),

    /*
    |--------------------------------------------------------------------------
    | Password grant access client secret
    |--------------------------------------------------------------------------
    |
    | Can be checked in db
    |
    */
    'password_client_secret' => env('PASSPORT_PASSWORD_GRANT_CLIENT_SECRET'),
];
