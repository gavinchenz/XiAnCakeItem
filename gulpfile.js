//导入工具包require("node_modules里对应的模块")
var gulp=require('gulp'),
sass= require('gulp-sass'),
connect=require('gulp-connect'),
concat= require('gulp-concat'),
uglify=require("gulp-uglify"),
rename=require("gulp-rename"),
ninfyCSS=require("gulp-minify-css"),
imagemin=require("gulp-imagemin");

gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:\\陈卓\\Item_cz_2018_01_16\\css"))
});

gulp.task('copy-html',function(){
	gulp.src('*.html')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\CakeItem'));
});

gulp.task('copyimgfile',function(){
	gulp.src('img/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\CakeItem\\img'));
});

gulp.task('copycssfile',function(){
	gulp.src('css/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\CakeItem\\css'));
});


gulp.task('copyjsgfile',function(){
	gulp.src('js/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\CakeItem\\js'));
});

gulp.task('copyvideogfile',function(){
	gulp.src('video/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\CakeItem\\video'));
});

// gulp.task("build",["sass"],function(){
// 	console.log("ok");
// });

gulp.task("watch",function(){
	gulp.watch("sass/*.scss",["sass"]);
});
