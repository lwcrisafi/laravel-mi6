<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mission;

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
}
