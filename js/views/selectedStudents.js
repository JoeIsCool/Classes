define(function(require) {
  'use strict';
  var Backbone = require('backbone');
  var $ = require('jquery');
  var method = require('util/method');


  return Backbone.View.extend({
    initialize: function() {
      this.render();
      var render = method(this, 'render');
      this.collection.on('all', render);
    },
    render: function() {
      var text;
      var length = this.collection.length;
      switch (length) {
        case 0:
          text = 'Classes for all students';
          break;
        case 1:
          text = 'Classes for ' + this.collection.at(0).get('name');
          break;
        case 2:
          text = 'Classes shared by ' + this.collection.at(0).get('name') + ' and ' + this.collection.at(1).get('name');
          break;
        default:
          text = 'Classes shared by ';
          for (var i = 0; i < length - 1; i++) {
            text += this.collection.at(i).get('name') + ", ";
          }
          text += " and " + this.collection.at(length - 1).get('name');
          break;
      }
      this.$el.html(text);
      return this;
    }
  });
});
