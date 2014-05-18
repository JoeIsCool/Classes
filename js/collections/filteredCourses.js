define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var CourseList = require('collections/courseList');
  var selectedStudentList = require('singletons/selectedStudentList');
  var method = require('util/method');
  var allCourseList = require('singletons/allCourseList');

  return CourseList.extend({
    initialize: function() {
      this.refresh();
      var refresh = method(this, 'refresh');
      selectedStudentList.on('all', refresh);
      allCourseList.on('all', refresh);
    },
    refresh: function() {
      var newList = this.newList();
      this.reset(newList);
    },
    newList: function() {
      if (selectedStudentList.length == 0) {
        return allCourseList.models;
      }
      var scheduleArray = this.getScheduleArray();
      var twoDIdArray = _.map(scheduleArray, this.getIdList);
      var commonIds = _.intersection.apply(this, twoDIdArray);
      var commonSchedule = _.map(commonIds, this.getCourse);
      return commonSchedule;
    },
    getScheduleArray: function() {
      return selectedStudentList.invoke('get', 'schedule');
    },
    getIdList: function(schedule) {
      return schedule.invoke('get', 'id');
    },
    getCourse: function(id) {
      return allCourseList.get(id);
    }
  });
});
