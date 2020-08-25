const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
      '@pages': path.resolve(__dirname, 'resources/js/pages'),
      '@components': path.resolve(__dirname, 'resources/js/components'),
      '@layouts': path.resolve(__dirname, 'resources/js/layouts'),
      '@services': path.resolve(__dirname, 'resources/js/services'),
      '@helpers': path.resolve(__dirname, 'resources/js/helpers'),
      '@shared': path.resolve(__dirname, 'resources/js/shared'),
      '@store': path.resolve(__dirname, 'resources/js/store'),
      '@routes': path.resolve(__dirname, 'resources/js/routes'),
    },
  },
});
