<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    
    public function index() {

       

        $people = Person::with('aliases')
        ->where('status_text', 'Active')
        ->get();
        
        

        return $people;

    }

    public function show($person_id){
        $person_id = Person::where('id',$person_id)->firstOrFail();
        return $person_id;
    }


}
