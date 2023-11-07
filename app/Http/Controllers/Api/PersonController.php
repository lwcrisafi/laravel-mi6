<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

/* class PersonController extends Controller
{
<<<<<<< HEAD
    public function index() {
=======
    public function index()
    {
        $people = Person::with('aliases', 'statuses', 'image:id,path')->get();
        return $people;
    }
}
*/
>>>>>>> 00f19c82a9a8fa9cffa5c66090ccba985e3307b5


        $people = Person::with('aliases')
        ->where('status_text', 'Active')
        ->get();
        
        

// class PersonController extends Controller
// {
//     public function index()
//     {
//         $people = Person::with('statuses', 'image:id,path')
//             ->withCount('aliases') // Load the count of aliases
//             ->has('aliases') // Only load aliases for people who have at least one alias
//             ->get();

    }
}