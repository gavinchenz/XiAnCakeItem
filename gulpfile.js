//导入工具包require("node_modules里对应的模块")
var gulp=require('gulp'),
sass= require('gulp-sass'),
connect=require('gulp-connect'),
concat= require('gulp-concat'),
uglify=require("gulp-uglofy"),
rename=require("gulp-rename"),
ninfyCSS=require("gulp-minify-css"),
imagemin=require("gulp-imagemin");

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess',function(){
	gulp.src('src/sass/index.scss')
	.pipe(sass())
	.pipe(gulp.dest('src/css'));
});