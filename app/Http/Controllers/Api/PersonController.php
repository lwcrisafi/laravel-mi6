<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

/* class PersonController extends Controller
{
    public function index()
    {
        $people = Person::with('aliases', 'statuses', 'image:id,path')->get();
        return $people;
    }
}
*/



// class PersonController extends Controller
// {
//     public function index()
//     {
//         $people = Person::with('statuses', 'image:id,path')
//             ->withCount('aliases') // Load the count of aliases
//             ->has('aliases') // Only load aliases for people who have at least one alias
//             ->get();

//         return $people;
//     }
// }

// class PersonController extends Controller
// {
//     public function index()
//     {
//         $people = Person::with('statuses', 'image:id,path')
//             ->with(['aliases' => function ($query) {
//                 $query->select('person_id', 'alias');
//             }])
//             ->whereHas('aliases') // Load aliases for people who have at least one alias
//             ->get();

//         return $people;
//     }
// }

// class PersonController extends Controller
// {
// public function index()
//     {

//         $people = Person::with('aliases')
//             ->whereHas('aliases', function ($query) {
//                 $query->whereNotNull('alias');
//             })
//             ->get();

//         return $people;
//     }
// }

class PersonController extends Controller
{
    public function index() {

       

        $people = Person::with('aliases')
        ->where('status_text', 'Active')
        ->get();
        
        

        return $people;

    }
}