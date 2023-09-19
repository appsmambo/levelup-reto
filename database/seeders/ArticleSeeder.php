<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Article;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Article::truncate();
        $csvFile = fopen(base_path("database/data/articles.csv"), "r");
        $firstline = true;
        while (($data = fgetcsv($csvFile, 250, ",")) !== FALSE) {
            if (!$firstline) {
                Article::create([
                    "title" => $data['1'],
                    "author" => $data['2'],
                    "year" => $data['3']
                ]);
            }
            $firstline = false;
        }
        fclose($csvFile);
    }
}
