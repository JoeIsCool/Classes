define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var Student = require('models/student');

  return Backbone.Collection.extend({
    model: Student,
    comparator: 'name'
  });
});
