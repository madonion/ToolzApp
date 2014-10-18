/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/node-uuid/uuid.js');

var pickFiles = require('broccoli-static-compiler');
var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
    srcDir: '/',
    destDir: '/fonts'
});

/*// Bootstrap for ember
// Careful adding additional modules here - some require full handlebars.js, and by default ember-cli only includes runtime in production
['bs-core.min.js', 'bs-nav.min.js', 'bs-alert.min.js', 'bs-modal.max.js', 'bs-label.min.js', 'bs-button.min.js', 
'bs-basic.min.js', 'bs-popover.min.js', 'bs-progressbar.min.js','bs-breadcrumbs.min.js'].forEach(function (path) {
  var fullPath = 'bower_components/ember-addons.bs_for_ember/dist/js/' + path;
  app.import(fullPath);
});*/

var mergeTrees = require('broccoli-merge-trees');
module.exports = app.toTree();
