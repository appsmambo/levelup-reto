<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::select('id', 'title', 'description', 'price')->get();
        return Inertia::render('Products/Index', ['products' => [], 'title' => '']);
    }
}
