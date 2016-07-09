// https://habrahabr.ru/post/278109/
var gulp = require('gulp'),
	jade = require('gulp-jade');

	gulp.task('jade', function() {
		gulp.src('index.jade')
		.pipe(jade())
		.pipe(gulp.dest('dist'));
	});

	gulp.task('watch', function() {
		// gulp.watch('css/*.css');
		gulp.watch('*.jade', ['jade']);
	});