module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var jsTargets = ['**/*.js', '!node_modules/**/*', '!bower_components/**/*'];
  var allTargets = ['**/*.*', '!node_modules/**/*', '!bower_components/**/*']
  grunt.initConfig({
    connect: {
      options: {
        keepalive: true,
        livereload: true,
        port: 5000
      }

    },
    jshint: {
      all: jsTargets
    },
    jsbeautifier: {
      all: jsTargets,
      options: {
        js: {
          indentSize: 2,
        }
      }
    },
    watch: {
      js: {
        files: jsTargets,
        tasks: ["jsbeautifier", "jshint"],
      },
      all: {
        files: allTargets,
        options: {
          livereload: true,
          reload: true
        }
      },
    }
  });

  grunt.registerTask('default', ['connect']);

};
