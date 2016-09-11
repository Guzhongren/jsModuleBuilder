var gulp= require('gulp');
var react= require('gulp-react');

gulp.task('jsx', function(){
    gulp.src('./event.jsx')
    .pipe(react())
    .pipe(gulp.dest('./'))
});
gulp.task('default', ['jsx']);
