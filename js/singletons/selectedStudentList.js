define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var StudentList = require('collections/selectedStudentList');

  return new StudentList();
});
