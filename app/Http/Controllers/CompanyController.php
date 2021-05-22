<?php

namespace App\Http\Controllers;

use App\Http\Requests\Companies\CompanySearchRequest;
use App\Services\SearchService;
use Illuminate\Support\Facades\Http;

class CompanyController extends Controller
{
    protected $searchService;

    public function __construct(SearchService $searchService)
    {
        $this->searchService = $searchService;
    }

    /**
     * @param CompanySearchRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(CompanySearchRequest $request)
    {
        $params = $request->only(['q', 'items_per_page', 'start_index']);
        $companies = $this->searchService->searchCompaniesHouse($params);

        return response()->json($companies);
    }
}
