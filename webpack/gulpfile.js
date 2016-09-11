var gulp = require('gulp');
var webpack= require('gulp-webpack');
var webpackConfig=  require('./webpack.config.js');

gulp.task('webpack', function(){
    var myConifg= Object.create(webpackConfig);
    return gulp.src('./src/main.js')
    .pipe(webpack(myConifg))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['webpack']);
