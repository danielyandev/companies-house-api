<?php


namespace App\Services;


use Illuminate\Support\Facades\Http;

class SearchService
{
    protected $companiesHouseConfig;

    public function __construct()
    {
        $this->companiesHouseConfig = config('companies_house');
    }

    /**
     * @param $params
     * @return array|mixed
     */
    public function searchCompaniesHouse($params)
    {
        $url = $this->companiesHouseConfig['urls'][$this->companiesHouseConfig['type']];
        $url .= '/search/companies';

        $response  = Http::withBasicAuth($this->companiesHouseConfig['api_key'], '')->get($url, $params);
        return $response->json();
    }
}
