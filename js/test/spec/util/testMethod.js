define(function(require) {
  'use strict'
  var method = require("util/method");
  describe('util/testMethod', function() {

    it("basic case", function() {
      var a = {
        prop: 1,
        func: function() {
          return this.prop
        }
      };
      var m = method(a, 'func');
      expect(m()).toEqual(1);
    });

    it("invokes on spy", function() {
      var a = {
        prop: 1,
        func: function() {
          return this.prop
        }
      };
      var m = method(a, 'func');
      spyOn(a, 'func');
      m();
      expect(a.func).toHaveBeenCalled();
    });

    it("pass context", function() {
      var a = {
        func: function() {
          return this.prop
        }
      };
      var b = {
        prop: 2
      }
      var m = method(a, 'func', b);
      expect(m()).toEqual(2);
    });

  });
  return true;
});
