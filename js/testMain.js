require(['amdconfig'], function() {
  require(['/test/testAmdconfig'], function() {
    require(['/test/testRun'], function(run) {
      run();
    });
  });
});
