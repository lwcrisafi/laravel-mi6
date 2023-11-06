<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    
    public function index() {

       

        $people = Person::with('aliases', 'statuses')->get();
        
        

        return $people;

    }


}