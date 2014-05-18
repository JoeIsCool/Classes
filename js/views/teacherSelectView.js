define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var allTeacherList = require('singletons/allTeacherList');
  var tpl = require('hbars!tpl/teacherSelect');
  var $ = require('jquery');


  return Backbone.View.extend({
    collection: allTeacherList,
    template: tpl,
    initialize: function() {
      this.render();
    },
    render: function() {
      var html = tpl(this.collection.toJSON());
      this.$el.html(html);
      this.$el.find('select').change(function() {
        var val = $(this).val();
        Backbone.trigger('teacher_select', val);
      });
      return this;
    }
  });
});
