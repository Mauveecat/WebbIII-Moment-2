//Definiera variabler
const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

//Sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*css",
    jsPath: "src/js/*.js",
    imagePath: "src/images/*"

}

//HTML-task, kopiera html
function copyHTML() {
    return src(files.htmlPath)
        //Kopiera till och uppdatera filer i pub
        .pipe(dest("pub"));
}

//CSS-task
function copyCSS() {
    return src(files.cssPath)
        //komprimera flera filer till en
        .pipe(concat('main.css'))
        //Minimera kod och ta bort kommentarer
        .pipe(cssnano())
        //Kopiera till och uppdatera filer i pub
        .pipe(dest('pub/css'))
        //Synka ändringar till browsern och uppdatera sidan automatiskt
        .pipe(browserSync.stream());
}

//JS-task
function copyJS() {
    return src(files.jsPath)
        //komprimera flera filer till en
        .pipe(concat('main.js'))
        //Minimera kod och ta bort kommentarer
        .pipe(terser())
        //Kopiera till och uppdatera filer i pub
        .pipe(dest('pub/js'));
}

//Image-task
function copyImage() {
    return src(files.imagePath)
        //Minimera bilder
        .pipe(imagemin())
        //Kopiera till och uppdatera filer i pub
        .pipe(dest('pub/images'));
}

//Watch-task
function watchTask() {

    //Initiera browsersync
    browserSync.init({
        server: "./pub"
    });

    watch([files.htmlPath, files.cssPath, files.jsPath, files.imagePath], parallel(copyHTML, copyCSS, copyJS, copyImage)).on('change', browserSync.reload);
}

//Export tasks
exports.default = series(
    parallel(copyHTML, copyCSS, copyJS, copyImage),
    watchTask
);