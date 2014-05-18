define(function(require) {
  var mapObject = require("util/mapObject");
  describe("util/mapObject", function() {
    it("should map correctly", function() {
      var context = {
        addVal: 1
      };
      var input = {
        a: 1,
        b: 2
      };
      var add = function(input) {
        return input + this.addVal;
      }
      var result = mapObject(input, add, context);
      expect(result).toEqual({
        a: 2,
        b: 3
      });
    });
  });

});
