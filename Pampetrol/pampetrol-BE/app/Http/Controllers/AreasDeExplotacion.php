<?php

namespace App\Http\Controllers;

use App\ExploitationArea;
use Illuminate\Http\Request;
use App\AreasDeExplotacion as AreasExplotacion;

class AreasDeExplotacion extends Controller
{
    function get(){
        $areas = ExploitationArea::all();
        return $areas;
    }
}
