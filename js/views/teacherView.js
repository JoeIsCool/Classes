define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var SelectedTeacherPointer = require('models/selectedTeacherPointer');
  var tpl = require('hbars!tpl/teacherView');
  var $ = require('jquery');
  var method = require('util/method');


  return Backbone.View.extend({
    model: new SelectedTeacherPointer(),
    template: tpl,
    initialize: function() {
      var render = method(this, 'render');
      this.model.on('change', render);
    },
    render: function() {
      var model = this.model.get('model');
      var json = {
        name: model.get('name'),
        schedule: model.get('schedule').toJSON()
      };
      var html = tpl(json);
      this.$el.html(html);
      return this;
    }
  });
});
