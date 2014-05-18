define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var Teacher = require('models/teacher');
  var allTeacherList = require('singletons/allTeacherList');
  var method = require('util/method');

  return Backbone.Model.extend({
    initialize: function() {
      var select = method(this, 'select');
      Backbone.on('teacher_select', select);
    },
    select: function(id) {
      var teacher = allTeacherList.get(id);
      this.set('model', teacher);
    }
  });
});
