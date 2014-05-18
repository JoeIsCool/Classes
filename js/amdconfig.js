define(function(require) {
  'use strict';
  requirejs.config({
    baseUrl: 'js',
    paths: {
      bower: '../bower_components',
      text: '../bower_components/requirejs-text/text',
      hbars: '../bower_components/require-handlebars/hbars',
      'underscore': "../bower_components/lodash/dist/lodash.underscore",
      'jquery': '../bower_components/jquery/dist/jquery',
      'Handlebars': '../bower_components/handlebars/handlebars',
      'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
      'typeahead': '../bower_components/typeahead.js/dist/typeahead.jquery',
      'backbone': '../bower_components/backbone/backbone'
    },
    shim: {
      Handlebars: {
        exports: 'Handlebars'
      },
      typeahead: {
        deps: ['jquery']
      },
      "backbone": {
        deps: ['jquery', 'underscore'],
        exports: "Backbone" //attaches "Backbone" to the window object
      },
      bootstrap: {
        deps: ['jquery']
      }
    }
  });
});
