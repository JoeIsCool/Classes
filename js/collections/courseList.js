define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var Course = require('models/course');

  return Backbone.Collection.extend({
    model: Course,
    comparator: 'period'
  });
});
