<?php

return [
    /*
    |--------------------------------------------------------------------------
    | API type
    |--------------------------------------------------------------------------
    |
    | The value must be 'live' or 'sandbox'
    |
    */
    'type' => env('COMPANIES_HOUSE_API_TYPE', 'live'),

    /*
    |--------------------------------------------------------------------------
    | API key
    |--------------------------------------------------------------------------
    |
    | Api basic authorisation key
    |
    */
    'api_key' => env('COMPANIES_HOUSE_API_KEY'),

    /*
    |--------------------------------------------------------------------------
    | API base urls
    |--------------------------------------------------------------------------
    |
    | Api urls for 'live' and 'sandbox'
    |
    */
    'urls' => [
        'live' => 'https://api.company-information.service.gov.uk',
        'sandbox' => 'https://api-sandbox.company-information.service.gov.uk'
    ],
];
