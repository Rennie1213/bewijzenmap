var gulp 					= require('gulp');
var sass 					= require('gulp-sass');
var autoprefixer 	= require('gulp-autoprefixer');
var livereload    = require('gulp-livereload');

var paths = {
	scripts: ['.app/**/**/*.js', './app/**/*.js', './app/*.js'],
	views: ['./app/**/**/*.html', './app/**/*.html', './*.html']
};

gulp.task('default', ['sass', 'scripts']);

gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ browsers: ['last 2 versions'] }))
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});

gulp.task('views', function() {
	gulp.src(paths.views)
		.pipe(livereload());
});

gulp.task('scripts', function() {
	gulp.src(paths.scripts)
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./scss/*.scss', ['sass']);
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.views, ['views']);
});