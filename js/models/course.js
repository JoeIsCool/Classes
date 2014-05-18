define(function(require) {
  'use strict';
  var Backbone = require('backbone');

  //attributes: teacherName, period, className
  //We make an id from teacherName and period, so these properties must be immutable.  Don't change them
  return Backbone.Model.extend({
    initialize: function() {
      var id = '' + this.get('period') + '|' + this.get('teacherName');
      this.set('id', id);
      Backbone.trigger('course_add', this);
    }
  });
});
