'use strict'

import gulp from 'gulp';
import ts from 'gulp-typescript';
import sass from 'gulp-sass';
import prefix from 'gulp-autoprefixer';
import browserSync from 'browser-sync';

const paths = {
  server: ['typings/browser.d.ts', 'server/**/*.ts'],
  client: ['typings/browser.d.ts', 'client/**/*.ts'],
  templates: ['client/index.ejs'],
  styles: ['client/stylesheets/main.scss'],
  lib: [
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/http.dev.js',
    'node_modules/angular2/bundles/router.dev.js',
    'node_modules/angular2/bundles/angular2-polyfills.js'
  ]
};

// TODO Fix to import tsconfig
gulp.task('server', () => {
  return gulp.src(paths.server)
    .pipe(ts({
      "target": "es5",
      "module": "common",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "removeComments": false,
      "noImplicitAny": false
    })).js
    .pipe(gulp.dest('build/server'));
});

gulp.task('client', () => {
  return gulp.src(paths.client)
    .pipe(ts({
      "target": "es5",
      "module": "system",
      "moduleResolution": "node",
      "sourceMap": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "removeComments": false,
      "noImplicitAny": false
    })).js
    .pipe(gulp.dest('build/client'));
});

gulp.task('templates', () => {
  return gulp.src(paths.templates)
    .pipe(gulp.dest('build/client'));
});

gulp.task('styles', () => {
  return gulp.src(paths.styles)
    .pipe(sass({
      includePaths: ['stylehseets'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('build/client/stylesheets'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', () => {
  gulp.watch(paths.server, ['server']);
  gulp.watch(paths.client, ['client']);
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['server', 'client','templates', 'styles', 'watch']);
