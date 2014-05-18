define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var tpl = require('hbars!tpl/filteredCourses');
  var $ = require('jquery');
  var method = require('util/method');


  return Backbone.View.extend({
    template: tpl,
    initialize: function() {
      this.render();
      var render = method(this, 'render');
      this.collection.on('all', render);
    },
    render: function() {
      var html = tpl(this.collection.toJSON());
      this.$el.html(html);
      return this;
    }
  });
});
