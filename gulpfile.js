var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var traceur = require('gulp-traceur');

var PATHS = {
  src: {
    js: 'front-end-src/**/*.js',
    html: 'front-end-src/**/*.html',
    css: 'front-end-src/**/*.css',
    json: 'front-end-src/**/*.json'
  },
  lib: [
    'node_modules/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/systemjs/dist/system-csp-production.src.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/angular2/node_modules/zone.js/dist/zone.js',
    'node_modules/angular2/node_modules/zone.js/dist/long-stack-trace-zone.js'
  ]
};

gulp.task('clean', function(done) {
  del(['app/public'], done);
});

gulp.task('js', function () {
  return gulp.src(PATHS.src.js)
    .pipe(rename({extname: ''})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
    .pipe(plumber())
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true,
      memberVariables: true
    }))
    .pipe(rename({extname: '.js'})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
    .pipe(gulp.dest('app/public'));
});

gulp.task('html', function () {
  return gulp.src(PATHS.src.html)
    .pipe(gulp.dest('app/public'));
});

gulp.task('css', function () {
  return gulp.src(PATHS.src.css)
    .pipe(gulp.dest('app/public'));
});

gulp.task('json', function () {
  return gulp.src(PATHS.src.json)
    .pipe(gulp.dest('app/public'));
});

gulp.task('libs', ['angular2'], function () {
  var size = require('gulp-size');
  return gulp.src(PATHS.lib)
    .pipe(size({showFiles: true, gzip: true}))
    .pipe(gulp.dest('app/public/lib'));
});

gulp.task('angular2', function () {
  
  var buildConfig = {
    defaultJSExtensions: true,
    paths: {
      "angular2/*": "node_modules/angular2/es6/prod/*.js",
      "rx": "node_modules/angular2/node_modules/rx/dist/rx.js"
    },
    meta: {
      // auto-detection fails to detect properly
      'rx': {
        format: 'cjs' //https://github.com/systemjs/builder/issues/123
      }
    }
  };
  
  var Builder = require('systemjs-builder');
  var builder = new Builder(buildConfig);
  
  return builder.build('angular2/angular2', 'app/public/lib/angular2.js', {});
});

gulp.task('play', ['default'], function () {

  gulp.watch(PATHS.src.html, ['html']);
  gulp.watch(PATHS.src.js, ['js']);
  gulp.watch(PATHS.src.css, ['css']);
  gulp.watch(PATHS.src.json, ['json']);

});

gulp.task('default', ['js', 'html', 'css', 'json', 'libs']);
