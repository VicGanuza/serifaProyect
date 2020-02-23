<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BusinessStrategy;

class EstrategiasDeNegocios extends Controller
{
    function get(){
        $estrategias = BusinessStrategy::all();
        return $estrategias;
    }
}
