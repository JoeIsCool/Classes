define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var StudentList = require('collections/studentList');
  var CourseList = require('collections/courseList');
  var allStudentList = require('singletons/allStudentList');
  var method = require('util/method');
  var _ = require('underscore');

  return StudentList.extend({
    initialize: function() {
      var studentSelect = method(this, 'studentSelect')
      Backbone.on('student_select', studentSelect);
    },
    studentSelect: function(idArr) {
      var students = _.map(idArr, this.getStudent);
      this.reset(students);
    },
    getStudent: method(allStudentList, 'get')
  });
});
