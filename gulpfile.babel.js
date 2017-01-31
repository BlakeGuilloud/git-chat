// ------------------------------
// Import Dependencies
// ------------------------------
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const cssnano = require('cssnano');
const gulp = require('gulp');
const gutil = require('gulp-util');
const less = require('gulp-less');
const open = require('gulp-open');
const postcss = require('gulp-postcss');
const serve = require('gulp-serve');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

// ------------------------------
// serve
// ------------------------------
gulp.task('serve', ['build:jsClient', 'build:styles', 'watch'], serve({ port: 3000 }));

// ------------------------------
// watch
// ------------------------------
gulp.task('watch', () => {
  gulp.watch(['src/**/*.js', 'src/*.js', 'src/**/*.jsx'], ['build:jsClient']);
  gulp.watch(['src/**/*.less'], ['build:styles']);
});

// ------------------------------
// build:jsClient
// ------------------------------
gulp.task('build:jsClient', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('build:jsClient', err);
    gutil.log('build:jsClient', stats.toString({
      colors: true,
      exclude: 'node_modules',
    }));
    callback();
  });
});

// ------------------------------
// build:styles
// ------------------------------
gulp.task('build:styles', () => {
  const processors = [
    autoprefixer({ browsers: ['last 2 versions', 'ie 10'], cascade: false}),
    cssnano(),
  ];
  return gulp.src(['./src/less/app.less'])
    .pipe(less({ compress: true }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/less'));
});
