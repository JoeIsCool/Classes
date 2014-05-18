define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var Teacher = require('models/teacher');

  return Backbone.Collection.extend({
    model: Teacher,
    comparator: 'name'
  });
});
