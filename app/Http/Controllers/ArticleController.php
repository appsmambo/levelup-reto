<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('Articles/Index', ['articles' => [], 'title' => '']);
    }

    public function search(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:100'
        ]);

        $articles = [];
        $title = '';

        if (!$validator->fails()) {
            $validated = $validator->validated();
            $title = $validated['title'];
            $searchTitle = '%' . $validated['title'] . '%';
            $articles = Article::select('id', 'title', 'author', 'year')
                ->where('title', 'LIKE', $searchTitle)
                ->orderBy('title')
                ->get();
        }

        return Inertia::render('Articles/Index', ['articles' => $articles, 'title' => $title]);
    }
}
