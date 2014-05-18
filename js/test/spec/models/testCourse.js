define(function(require) {
  'use strict'
  var Backbone = require('backbone');
  var Course = require("models/course");
  describe('model/testCourse', function() {
    it('Makes id', function() {
      var course = new Course({
        "teacherName": "Mr. Ferrigno",
        "period": 4,
        "className": "Gym"
      });
      expect(course.id).toEqual("4|Mr. Ferrigno");
    });
    it('triggers event', function() {
      var courseRef;
      Backbone.on('course_add', function(model) {
        courseRef = model;
      });
      var course = new Course({
        "teacherName": "Mr. Ferrigno",
        "period": 4,
        "className": "Gym"
      });
      expect(courseRef.id).toEqual("4|Mr. Ferrigno");
    })
  });
});
