var path = require('path'),
      gulp = require('gulp'),
      config = require('./config/gulpconfig'),
      sass = require('gulp-sass');

gulp.task('sass', function(){
      var sassPath = config.strategy + "/**/*.scss";
      gulp.src([sassPath])
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(config.strategy));
});

gulp.task('watch', function(){
      var sassPath = config.strategy + "/**/*.scss";
      gulp.watch(sassPath, ['sass']);
});



