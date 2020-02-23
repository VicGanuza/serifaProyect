<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Balance as Bal;

class Balance extends Controller
{
    function get(){
        $balance = Bal::all();
        return $balance;
    }
}
