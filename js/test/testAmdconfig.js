(function() {
  'use strict';
  // Configure RequireJS to shim Jasmine
  var jasmineCore = '../bower_components/jasmine/lib/jasmine-core';
  requirejs.config({
    baseUrl: '../../js',
    paths: {
      'jasmine': jasmineCore + '/jasmine',
      'jasmine-html': jasmineCore + '/jasmine-html',
      'boot': jasmineCore + '/boot',
      'spec': 'test/spec'
    },
    shim: {
      'jasmine': {
        exports: 'jasmine'
      },
      'jasmine-html': {
        deps: ['jasmine'],
        exports: 'jasmine'
      },
      'boot': {
        deps: ['jasmine', 'jasmine-html'],
        exports: 'jasmine'
      }
    }
  });
})();
