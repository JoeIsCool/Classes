define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var CourseList = require('collections/courseList');

  //attributes: name, schedule
  //We make an id from name, so this property must be immutable.  Don't change it.
  return Backbone.Model.extend({
    idAttribute: 'name',
    initialize: function() {
      var scheduleArr = this.get('schedule');
      var schedule = new CourseList(scheduleArr);
      this.set('schedule', schedule);
    }
  });
});
