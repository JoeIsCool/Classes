define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var Student = require("models/student");
  describe('model/testStudent', function() {
    it('Makes student', function() {
      var student = new Student({
        "name": "Reed Timmer",
        "schedule": [{
          "teacherName": "Mr. Science",
          "period": 1,
          "className": "Science"
        }, {
          "teacherName": "Mr. Jefferson",
          "period": 2,
          "className": "Social Studies"
        }, {
          "teacherName": "Mr. Pythagoras",
          "period": 3,
          "className": "Math"
        }, {
          "teacherName": "Mr. Ferrigno",
          "period": 4,
          "className": "Gym"
        }]
      });
      expect(student.id).toEqual("Reed Timmer");
      var schedule = student.get('schedule');
      expect(schedule.get('1|Mr. Science').id).toEqual('1|Mr. Science');
    });
  });
});
