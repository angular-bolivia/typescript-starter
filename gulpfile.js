var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json", { noEmitOnError: true });

gulp.task("build", function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest("./dist"));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.ts', ['build']);
});