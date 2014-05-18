define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var TeacherList = require('collections/teacherList');

  var teacherList = new TeacherList();
  teacherList.create = function(allCourseList) {
    allCourseList.each(this.addCourse, this);
  };
  teacherList.addCourse = function(course) {
    var teacherName = course.get('teacherName');
    this.add({
      name: teacherName
    });
    var teacher = this.get(teacherName);
    teacher.get('schedule').add(course);
  }
  return teacherList;
});
