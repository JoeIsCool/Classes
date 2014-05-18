define(function(require) {
  'use strict';
  return function() {
    // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
    // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
    // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
    // initialize the HTML Reporter and execute the environment.
    require(['boot'], function() {

      // Load the specs
      require(['test/specList'], function() {

        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
        window.onload();
      });
    });
  };
});
