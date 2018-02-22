var autoprefixer  = require("gulp-autoprefixer");
var cleanCSS      = require('gulp-clean-css');
var combineMq     = require('gulp-combine-mq');
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

// Should we build the prototyping utilities?
var build_prototyping_utils   = false;

// Should we build the production utilities?
var build_production_utils    = false;

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

// Don't modify these ------------------------------------
const USWDS_SRC_DIR     = path.join(__dirname, ...USWDS_SRC.split('/'));
// -------------------------------------------------------

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CONDITIONAL PIPES

// var conditionalPipe = lazypipe()
//   .pipe(jshint)
//   .pipe(jshint.reporter)
//   .pipe(jshint.reporter, 'fail');

// use:  .pipe(gulpif(CONDITION_VAR, conditionalPipe()))

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// BUILD USWDS STYLES

gulp.task('copy-uswds-assets', () => {
  return gulp.src(`${USWDS_SRC}/@(js|fonts|img)/**/**`)
  .pipe(gulp.dest(`${ASSETS_DEST}`));
});

gulp.task('build-prototyping-utilities', function (done) {
  return gulp.src(`${USWDS_SRC}/stylesheets/uswds-prototyping-utilities.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        `${PROJECT_SASS_SRC}`,
        path.join(USWDS_SRC, 'stylesheets/project'),
      ]
    }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: [
          '> 1%',
          'Last 2 versions',
          'IE 11',
          'IE 10',
          'IE 9',
        ],
        cascade: false,
      }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(gzip({ extension: 'zip' }))
    .pipe(gulp.dest(`${CSS_DEST}`));
});

gulp.task('build-production-utilities', function (done) {
  return gulp.src(`${USWDS_SRC}/stylesheets/**/**`)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        path.join(USWDS_DIST_DIR, 'scss'),
      ]
    }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: [
          '> 1%',
          'Last 2 versions',
          'IE 11',
          'IE 10',
          'IE 9',
        ],
        cascade: false,
      }))
    .pipe(cssnano({
      safe: true,
      // XXX see https://github.com/ben-eb/cssnano/issues/340
      mergeRules: false,
    }))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./themes/digital.gov/static/lib/uswds/css'))
    .pipe(gzip({ extension: 'zip' }))
    .pipe(gulp.dest('./themes/digital.gov/static/lib/uswds/css'));
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
gulp.task("watch", function () {
  gulp.watch('./themes/digital.gov/src/sass/**/*.scss', ['sass']);
})


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task('default', ['watch', 'sass', 'copy-uswds-assets']);
