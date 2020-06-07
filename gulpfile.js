var process = require('process'),
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: '*',
        camelize: true,
        rename: {
            'gulp-autoprefixer': 'gAutoprefixer',
            'gulp-pixrem': 'gPixrem',
            'gulp-stylelint': 'gStylelint'
        }
    }),
    browserSync = $.browserSync.create();

// Configuration
// -----------------------------------------------------------------------------
var basePaths = {
        src: './static-src/',
        dist: './static/'
    },
    config = {
        sass: {
            glob: [basePaths.src + 'sass/**/*.s{a,c}ss', basePaths.src + '!sass/vendor/**/*.s{a,c}ss'],
            output: basePaths.dist + 'css',
            options: {
                paths: {
                    /* Allow SCSS files to import Bootstrap SASS */
                    includePaths: [
                        'sass/base/',
                        'sass/layout',
                        'sass/utils'
                    ]
                },
                renaming: { suffix: ".min" }
            },
            vendor: {
                glob: 'vendor/css/*.css',
                output: basePaths.dist + 'css/vendor'
            }
        },
        js: {
            glob: [basePaths.src + 'js/**/*.js', basePaths.src + '!js/global/*.js'],
            output: basePaths.dist + 'js/',
            global: {
                glob: basePaths.src + 'js/global/*.js'
            },
            options: {
                renaming: { suffix: ".min" }
            },
            vendor: {
                glob: 'vendor/js/*.js',
                output: basePaths.dist + 'js/vendor'
            }
        },
        img: {
            glob: basePaths.src + 'img/**/*',
            output: basePaths.dist + 'img/',
            src: basePaths.src + 'img/'
        },
        documents: {
            glob: basePaths.src + 'documents/**/*',
            output: basePaths.dist + 'documents'
        },
        templates: {
            glob: '*.html'
        }
    };

/* -----------------------------------------------------------------------------
 * Function - handleSASS
 * Compiles SASS, autoprefixes, adds pixrem, renames, and cleans if production
 * NOTE: gulp-sourcemaps still not working fully on SASS. See:
 * https://github.com/sindresorhus/gulp-autoprefixer/issues/55
 * -------------------------------------------------------------------------- */
function handleSASS(input, output, options) {
    return input
        .pipe($.sass(options.paths).on("error", $.notify.onError(function(error) {
            return "SCSS could not be compiled: " + error.message;
        })))
        .pipe($.gPixrem({
            html: false,
            rootValue: 10
        }))
        .pipe($.gAutoprefixer({
            browsers: ['last 5 versions', '> 5% in GB', 'IE 10'],
            cascade: false,
            map: true
        }))
        .pipe($.rename(options.renaming))
        .pipe(gulp.dest(output))
        .pipe(browserSync.stream());
}

/* -----------------------------------------------------------------------------
 * Task - css
 * handleSASS() instance
 * -------------------------------------------------------------------------- */
gulp.task('css', function() {
    return handleSASS(gulp.src(config.sass.glob), config.sass.output, config.sass.options);
});

/* -----------------------------------------------------------------------------
 * Task - cssLinter
 * -------------------------------------------------------------------------- */
gulp.task('cssLinter', function() {
    return gulp.src(config.sass.glob)
        .pipe($.gStylelint({
            configFile: '.stylelintrc',
            failAfterError: config.isDebug,
            reporters: [
                {formatter: 'string', console: true}
            ],
            syntax: 'scss'
        }));
});

/* -----------------------------------------------------------------------------
 * Task - vendorCSS
 * Move vendor files to static/consumer/css/vendor
 * -------------------------------------------------------------------------- */
gulp.task('vendorCSS', function() {
    return gulp.src(config.sass.vendor.glob)
        .pipe(gulp.dest(config.sass.vendor.output));
});

// Error handler for Uglify so we log the problem and exit with a non-zero exit
// code. This prevents broken JS being deployed in production.
function processErrorHandler() {
    $.util.log(arguments)
    process.exit(1)
}

/* -----------------------------------------------------------------------------
 * Task - handleJS
 * Concatenate (if global) and minify additional JS files and outline as .min
 * -------------------------------------------------------------------------- */
function handleJS(input, output, isGlobal) {
    return input
        .pipe(isGlobal ? $.concat('global.js') : $.util.noop())
        .pipe($.uglify().on('error', processErrorHandler))
        .pipe($.rename(config.js.options.renaming))
        .pipe(gulp.dest(output))
        .pipe(browserSync.stream());
}

/* -----------------------------------------------------------------------------
 * Task - globalJS
 * handleJS instance for globally used JS files to output as global.min.js
 * -------------------------------------------------------------------------- */
gulp.task('globalJS', function() {
    return handleJS(gulp.src(config.js.global.glob), config.js.output, true);
});

/* -----------------------------------------------------------------------------
 * Task - additionalJS
 * handleJS instance for JS used on certain pages
 * -------------------------------------------------------------------------- */
gulp.task('additionalJS', function() {
    return handleJS(gulp.src(config.js.glob), config.js.output, false);
});

/* -----------------------------------------------------------------------------
 * Task - vendorJS
 * Move vendor files to static/consumer/js/vendor
 * -------------------------------------------------------------------------- */
gulp.task('vendorJS', function() {
    return gulp.src(config.js.vendor.glob)
        .pipe(gulp.dest(config.js.vendor.output));
});

/* -----------------------------------------------------------------------------
 * Task - optimiseImg
 * Manually run task to optimise images and return them to the same directory
 * -------------------------------------------------------------------------- */
gulp.task('optimiseImg', function () {
    return gulp.src([config.img.glob, '!img/**/*.svg'])
        .pipe($.plumber(function (error) {
            $.util.log($.util.colors.red('Error (' + error.plugin + '): ' + error.message));
            this.emit('end');
        }))
        .pipe($.bytediff.start())
        .pipe($.cache($.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe($.bytediff.stop())
        .pipe(gulp.dest(config.img.src));
});

/* -----------------------------------------------------------------------------
 * Task - img
 * Optimise images and move them to static/consumer/img
 * -------------------------------------------------------------------------- */
gulp.task('img', gulp.series('optimiseImg', function() {
    return gulp.src(config.img.glob)
        .pipe(gulp.dest(config.img.output));
}));

/* -----------------------------------------------------------------------------
 * Task - documents
 * Moves misc files into static/consumer/documents
 * -------------------------------------------------------------------------- */
gulp.task('documents', function() {
    return gulp.src(config.documents.glob)
        .pipe(gulp.dest(config.documents.output));
});

/* -----------------------------------------------------------------------------
 * Task - sassdoc
 * Generate sassdoc documentation and output it to static/consumer/sassdoc
 * -------------------------------------------------------------------------- */
gulp.task('sassdoc', function() {
    var options = {
        dest: basePaths.dist + 'sassdoc',
        verbose: true,
        display: {
            access: ['public', 'private'],
            alias: true,
            watermark: false,
        },
        groups: {
            breakpoints: 'Breakpoints',
            colours: 'Colours',
            helper: 'Helper functions',
            'undefined': 'General',
        },
        basePath: 'https://github.com/mrfirthy/Portfolio/tree/master/static-src/sass',
    };

    return gulp.src(config.sass.glob)
        .pipe($.sassdoc(options));
});

/* -----------------------------------------------------------------------------
 * Task - clear
 * Clears gulp-cache
 * -------------------------------------------------------------------------- */
gulp.task('clear', function (done) {
    return $.cache.clearAll(done);
});

/* -----------------------------------------------------------------------------
 * Task - clean
 * Deletes everything in static/consumer dir
 * -------------------------------------------------------------------------- */
gulp.task('clean', gulp.series('clear', function(done) {
    $.del(basePaths.dist + '**/*', {force: true}).then(paths => {
        gulp.task('browser-sync')();
    });
    done();
}));

/* -----------------------------------------------------------------------------
 * Task - browser-sync
 * Starts the Browser Sync server and sets up watch tasks for file changes
 * -------------------------------------------------------------------------- */
var devTasks = ['css', 'vendorCSS', 'additionalJS', 'globalJS', 'vendorJS', 'img', 'documents'];
gulp.task('browser-sync', gulp.series(devTasks, function() {
    browserSync.init({
        open: false,
        server: {
            baseDir: "./"
        }
    });

    // Begin polling target directories for changes
    gulp.watch(config.sass.glob, gulp.series('css'));
    gulp.watch(config.img.glob, gulp.series('img'));
    gulp.watch(config.js.global.glob, gulp.series('globalJS'));
    gulp.watch(config.js.glob, gulp.series('additionalJS'));
    gulp.watch(config.templates.glob).on('change', browserSync.reload);
}));

/* -----------------------------------------------------------------------------
 * Task - default
 * -------------------------------------------------------------------------- */
gulp.task('default', gulp.series('clean', function(done) {
    done();
}));
