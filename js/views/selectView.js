define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var allStudentList = require('singletons/allStudentList');
  var tpl = require('hbars!tpl/selectContainer');
  var $ = require('jquery');


  return Backbone.View.extend({
    collection: allStudentList,
    template: tpl,
    initialize: function() {
      this.render();
    },
    render: function() {
      var html = tpl(this.collection.toJSON());
      this.$el.html(html);
      this.$el.find('select').change(function() {
        var val = $(this).val();
        Backbone.trigger('student_select', val);
      });
      return this;
    }
  });
});
