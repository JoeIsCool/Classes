define(function(require) {
  'use strict'
  var CourseList = require("collections/courseList");
  describe('collections/testCourseList', function() {
    it('Sorts correctly', function() {
      var courseList = new CourseList([{
        "teacherName": "Mr. Ferrigno",
        "period": 4,
        "className": "Gym"
      }, {
        "teacherName": "Mr. Pythagoras",
        "period": 3,
        "className": "Math"
      }]);
      expect(courseList.at(0).get('id')).toEqual("3|Mr. Pythagoras");
      expect(courseList.at(1).get('id')).toEqual("4|Mr. Ferrigno");
    });
  });
});
