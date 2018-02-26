var autoprefixer  = require("gulp-autoprefixer");
var cleanCSS      = require('gulp-clean-css');
var combineMq     = require('gulp-combine-mq');
var concat        = require('gulp-concat');
var gulp          = require("gulp");
var gulpif        = require('gulp-if');
var gzip          = require('gulp-gzip');
var lazypipe      = require('lazypipe');
var path          = require('path');
var rename        = require("gulp-rename");
var sass          = require("gulp-sass");
var size          = require('gulp-size');
var sourcemaps    = require('gulp-sourcemaps');
var strip         = require('gulp-strip-css-comments');
var uncss         = require('gulp-uncss');
var watch         = require('gulp-watch');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// SETTINGS

// Should we build a font file separate from the main css?
var CONCAT_FONTS              = false;

// Should we build the prototyping utilities?
var build_production_utils    = true;

// Should we build the production utilities?
var build_production_utils    = true;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LOCATIONS

// All locations are relative to the project root
// Don't use a trailing `/` for path names, use `path/to/dir`

// USWDS source directory
const USWDS_SRC         = '_vendor/uswds';

// Project Sass source directory
const PROJECT_SASS_SRC  = '_sass';

// Asset destination
const ASSETS_DEST       = 'assets/uswds';

// CSS destination
const CSS_DEST          = 'assets/css';

// Build destination
const BUILD_DEST        = '_site';

// Include destination
const INC_DEST          = '_includes';

// Don't modify these ------------------------------------
const USWDS_SRC_DIR     = path.join(__dirname, ...USWDS_SRC.split('/'));
// -------------------------------------------------------

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// REUSABLE PIPES

// Conditional pipe
// var conditionalPipe = lazypipe()
//   .pipe(jshint)
//   .pipe(jshint.reporter)
//   .pipe(jshint.reporter, 'fail');

// use:  .pipe(gulpif(CONDITION_VAR, conditionalPipe()))

var buildFontCSS = lazypipe()
    .pipe(function () {
      return sass({
        includePaths: [
          `${PROJECT_SASS_SRC}`,
          path.join(USWDS_SRC, 'stylesheets/project'),
        ]
      }).on('error', sass.logError);
    })
    .pipe(cleanCSS, {
      compatibility: 'ie8'
    });

var fontCSS = buildFontCSS
    .pipe(gulp.dest, `${CSS_DEST}`);

var compileCSS = lazypipe()
    .pipe(sourcemaps.init)
    .pipe(function () {
      return sass({
        includePaths: [
          `${PROJECT_SASS_SRC}`,
          path.join(USWDS_SRC, 'stylesheets/project'),
        ]
      }).on('error', sass.logError);
    })
    .pipe(autoprefixer, {
      browsers: [
        '> 1%',
        'Last 2 versions',
        'IE 11',
        'IE 10',
        'IE 9',
      ],
      cascade: false,
    });

var cleanCSS = lazypipe()
    .pipe(cleanCSS, {
      compatibility: 'ie8'
    })
    .pipe(rename, {
      suffix: '.min'
    })
    .pipe(function () {
      return sourcemaps.write();
    });

var concatProduction = lazypipe()
    .pipe(concat, 'uswds-production-utilities.css');

var concatPrototyping = lazypipe()
    .pipe(concat, 'uswds-prototyping-utilities.css');


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// BUILD USWDS STYLES

gulp.task('copy-uswds-assets', () => {
  return gulp.src(`${USWDS_SRC}/@(js|fonts|img)/**/**`)
  .pipe(gulp.dest(`${ASSETS_DEST}`));
});

gulp.task('build-prototyping-utilities', function (done) {
  return gulp.src([`${USWDS_SRC}/stylesheets/uswds-fonts.scss`, `${USWDS_SRC}/stylesheets/uswds-prototyping-utilities.scss`])
    .pipe(compileCSS())
    .pipe(gulpif(CONCAT_FONTS, concatPrototyping()))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(gzip({ extension: 'gz' }))
    .pipe(gulp.dest(`${CSS_DEST}`));
});

gulp.task('build-production-utilities', function (done) {
  var thisCompiled = "uswds-gotcha.css";
  return gulp.src([`${USWDS_SRC}/stylesheets/uswds-fonts.scss`, `${USWDS_SRC}/stylesheets/uswds-production-utilities.scss`])
    .pipe(compileCSS())
    .pipe(gulpif(CONCAT_FONTS, concatProduction()))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(gzip({ extension: 'gz' }))
    .pipe(gulp.dest(`${CSS_DEST}`));
});

gulp.task('subset', function() {
    return gulp.src(`${CSS_DEST}/uswds-prototyping-utilities.min.css`)
      .pipe(uncss({
        html: [path.join(BUILD_DEST, '/**/*.html')]
      }))
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(rename('uswds.app.css'))
      .pipe(gulp.dest(`${CSS_DEST}`))
      .pipe(gulp.dest(`${INC_DEST}`))
      .pipe(size())
      .pipe(gzip({ extension: 'gz' }))
      .pipe(gulp.dest(`${CSS_DEST}`))
      .pipe(size())
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
gulp.task("watch", function () {
  gulp.watch('./themes/digital.gov/src/sass/**/*.scss', ['sass']);
})


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task('default', ['watch', 'sass', 'copy-uswds-assets']);
