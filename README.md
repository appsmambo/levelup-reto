<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

## Cómo levantar el proyecto

- Clona el repositorio, solo tenemos la rama *main*
- Ejecuta: composer install
- Ejecuta: npm install
- Actualiza la key_app en el .env con el comando: php artisan key:generate
- Actualiza la configuración de base de datos en el .env
- Ejecuta la migración: php artisan migrate
- Ejecuta los seeder: php artisan db:seed --class=ArticleSeeder; php artisan db:seed --class=ProductSeeder
- Inicia vite: npm run dev
- Inicia laravel: php artisan serve
- Levantar la url en el navegador: /articles
- Levantar la url en el navegador: /register
- Levantar la url en el navegador: /products

Saludos.
