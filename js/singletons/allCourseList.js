define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var CourseList = require('collections/courseList');

  var allCourseList = new CourseList();
  Backbone.on('course_add', function(course) {
    allCourseList.add(course);
  });
  return allCourseList;
});
