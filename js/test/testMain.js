require(['../amdconfig'], function() {
  require(['../../js/test/testAmdconfig'], function() {
    require(['test/testRun'], function(run) {
      run();
    });
  });
});
