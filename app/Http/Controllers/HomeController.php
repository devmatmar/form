<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

/**
 * Class HomeController
 * @package App\Http\Controllers
 * @author MARIANI Matthieu <devmattmar@gmail.com>
 */
class HomeController extends Controller
{
    /**
     * return react component
     * @return View|Factory|Application
     * @author MARIANI Matthieu <devmattmar@gmail.com>
     */
    public function index(): View|Factory|Application
    {
        $data = [];

        return view('index', [
            'comp' => 'Home',
            'data' => base64_encode(json_encode($data)),
        ]);
    }

}
