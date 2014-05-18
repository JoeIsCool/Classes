define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var CourseList = require('collections/courseList');

  //attributes: name, schedule
  //We make an id from name, so this property must be immutable.  Don't change it.
  return Backbone.Model.extend({
    idAttribute: 'name',
    initialize: function() {
      var schedule = new CourseList();
      this.set('schedule', schedule);
    }
  });
});
