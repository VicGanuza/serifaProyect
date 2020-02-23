<?php

namespace App\Http\Controllers;

use App\ExplorationArea;
use Illuminate\Http\Request;


class AreaExploracion extends Controller
{
    function get(){
        $areas = ExplorationArea::all();
        return $areas;
    }
}
