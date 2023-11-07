<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{

    public function index()
    {
        // $people = Person::with('aliases')
        //     ->whereHas('aliases', function ($query) {
        //         $query->whereNotNull('alias');
        //     })
        //     ->get();
        $people = Person::with('statuses')->where('status_id', 1)->where('name', 'not like', '%unknown%')->get();

        return $people;
    }

    public function show($person_id)
    {
        $person = Person::findOrFail($person_id);

        return $person;
    }
}
