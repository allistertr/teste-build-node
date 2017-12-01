var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('clean:public', function () {
  return del([
    'public/otus/dist/**/*'
    // ,'!public/node_modules/**'
  ],
    {
      force: true
    });
});

gulp.task('copy-all', function () {
  gulp.src(
    [
      '../otus/**/*'
    ]
  ).pipe(gulp.dest('public/'));
});

gulp.task('copy:otus', function () {
  gulp.src(
    [
      '../otus/otus/dist/**/*',
      '!node_modules/**'
    ]
  ).pipe(gulp.dest('public/otus/dist/'));
});

gulp.task('default', function(){
  runSequence('clean:public', 'copy:otus');
});