var gulp   = require('gulp'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload,
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		imageMin = require('gulp-imagemin'),
		minifyCSS = require('gulp-minify-css'),
		notify = require('gulp-notify'),
		plumber = require('gulp-plumber'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		uglify = require('gulp-uglify');

gulp.task('bs', function() {
	browserSync.init({
		// if running on windows, change this to http://localhost
		proxy: 'http://localhost:8888'
	});
});

gulp.task('styles', function() {
	return gulp.src('./styles/**/*.scss')
		.pipe(plumber({
		  errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'))
		.pipe(reload({ stream: true }));
});

gulp.task('scripts', function () {
	return gulp.src('./js/scripts.js')
		.pipe(plumber({
		  errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'))
		.pipe(reload({stream:true}));
});

gulp.task('images', function () {
	return gulp.src('./images/**/*')
		.pipe(imageMin())
		.pipe(gulp.dest('./images'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('styles/**/*.scss', ['styles']);
	gulp.watch('./js/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'images', 'bs', 'watch']);


/*const gulp = require('gulp');
const bs = require('browser-sync');
const reload = bs.reload;

gulp.task('bs', () => {
	bs.init({
		server:{
			baseDir: '.'
		}
	});
});
 
gulp.task('default',['bs'],() => {
	gulp.watch('/js/main.js',[reload]);
});*/