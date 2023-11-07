<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{

    public function index(Request $request)
    {
       $status_id = $request->input('status');

       $people_query = Person::with('aliases', 'image', 'status');

       if ($status_id) {
        $people_query = $people_query->where('status_id', $status_id);
       }

       $people = $people_query->get();

        return $people;
    }

    public function show($person_id)
    {
        $person = Person::findOrFail($person_id);

        return $person;
    }
}
