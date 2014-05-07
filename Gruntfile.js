module.exports = function(grunt) {

  var dest = 'assets/javascript/';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: [dest],
    concat: {
      options: {

      },
      dist: {
        src: ['_javascript/*.js'],
        dest: dest + '<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        sourceMap: true,
      },
      default: {
        src: dest + '<%= pkg.name %>.js',
        dest: dest + '<%= pkg.name %>.min.js'
      }
    },
    watch: {
      scripts: {
        files: 'javascript_src/**/*.js',
        tasks: ['concat', 'uglify'],
        options: {
          interrupt: true,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'watch']);
};
