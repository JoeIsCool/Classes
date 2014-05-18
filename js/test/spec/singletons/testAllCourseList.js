define(function(require) {
  'use strict';
  var Course = require('models/course');
  var allCourseList = require('singletons/allCourseList');
  describe('singleton/testAllCourseList', function() {
    it('Adds to allCourseList', function() {
      var course = new Course({
        "teacherName": "Mr. Ferrigno",
        "period": 4,
        "className": "Gym"
      });
      expect(allCourseList.get("4|Mr. Ferrigno").id).toEqual("4|Mr. Ferrigno");
    });
  });
});
