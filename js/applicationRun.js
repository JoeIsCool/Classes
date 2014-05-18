define(function(require) {
  'use strict';
  var body = require('hbars!tpl/bodyTemplate');
  var allCourseList = require('singletons/allCourseList');
  var allStudentList = require('singletons/allStudentList');
  var FilteredCourses = require('collections/filteredCourses');
  var selectedStudentList = require('singletons/selectedStudentList');
  var SelectView = require('views/selectView');
  var SelectedStudents = require('views/selectedStudents');
  var FilteredCoursesView = require('views/filteredCoursesView');
  var allTeacherList = require('singletons/allTeacherList');
  var allCourseList = require('singletons/allCourseList');
  var SelectedTeacherPointer = require('models/selectedTeacherPointer');
  var TeacherSelectView = require('views/teacherSelectView');
  var TeacherView = require('views/teacherView');
  var $ = require('jquery');
  require('bootstrap');
  var run = function run() {
    var requestData = $.ajax({
      url: 'data/student-schedules.json'
    });
    $('body').html(body());
    requestData.then(run.onAjax);
  };

  run.onAjax = function(json) {
    allStudentList.reset(json);
    var filteredCourses = new FilteredCourses();
    var selectView = new SelectView({
      el: $('#selectContainer')[0]
    });
    var selectedStudents = new SelectedStudents({
      el: $('#selectedStudents')[0],
      collection: selectedStudentList
    });
    var filteredCoursesView = new FilteredCoursesView({
      el: $('#filteredCourses')[0],
      collection: filteredCourses
    });
    allTeacherList.create(allCourseList);
    var teacherSelectView = new TeacherSelectView({
      el: $('#teacherSelect')[0]
    });
    var teacherView = new TeacherView({
      el: $('#teacherView')[0]
    });

  };


  return run;
});
