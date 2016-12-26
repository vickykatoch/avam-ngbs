var path = require('path'),
      gulp = require('gulp'),
      config = require('./config/gulpconfig'),
      sass = require('gulp-sass');

gulp.task('bs-sass', function(){
      var sassPath = config.bsPath + "/*.scss";
      gulp.src([sassPath])
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(config.styleTarget));
});
gulp.task('comp-sass', function(){
      var sassPath = config.components + "/**/*.scss";
       gulp.src([sassPath])
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(function(file){
                  return file.base;
            }));
})

gulp.task('watch', function(){
      var sassPath = config.components + "/**/*.scss";
      gulp.watch(sassPath, ['comp-sass']);
      var bsSassPath = config.bsPath + "/*.scss";
      gulp.watch(bsSassPath, ['bs-sass']);

});



