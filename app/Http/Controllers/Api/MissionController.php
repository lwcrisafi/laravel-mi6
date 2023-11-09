<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mission;
use App\Notifications\MissionOutcomeUpdated;

class MissionController extends Controller
{
    public function index() {
        $missions = Mission::get();

        return $missions;
    }

    public function show($mission_id) {
        $mission = Mission::findOrFail($mission_id);

        return $mission;
    }

    public function store(Request $request, $mission_id) {
        $request->validate([
            'name' => 'required',
            'year' => 'required',
        ]);

        $mission = Mission::with('people')->find($mission_id);

        if (!$mission) {
            return [
                'message' => 'mission not found, sorry bout it  :('
            ];
        } 
        $mission->name = $request->input('name');
        $mission->year = $request->input('year');
        $mission->outcome = $request->input('outcome');
        $mission->save();

        return [
            'message' => 'mission updated successfully  :)'];
    }

    public function updateMission(Request $request, $id){

        $mission= Mission::find($id);

        
        if (!$mission) {
            return response () ->json(['message'=> 'mission not found'], 404);
        }
        $mission ->update([
            'outcome' => $request -> input('outcome')
            $user->notify(new MissionOutcomeUpdated($mission))

            /////waiting for user 
        ]);
    }
       
}
