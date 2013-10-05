module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    var loadConfig = function (path) {
      var glob = require('glob');
      var object = {};
      var key;
     
      glob.sync('*', {cwd: path}).forEach(function(option) {
        key = option.replace(/\.js$/,'');
        object[key] = require(path + option);
      });
     
      return object;
    };
    var dirs = {
        src: 'src',
        dev: 'build',
        tmp: '.tmp',
        dist: 'dist'
    };

    var config = {
      pkg: grunt.file.readJSON('package.json'),
      dirs: dirs,
      env: process.env
    };
     
    grunt.util._.extend(config, loadConfig('./tasks/options/'));

    grunt.initConfig(config);

    grunt.loadTasks('tasks');

};

// TASK template:
// module.exports = function(grunt) {
//   grunt.registerTask('helloWorld', 'Say hello!', function() {
//     grunt.log.writeln("Hello world!");
//   });
// };

// OPTIONS template
// module.exports = {
//   options: {
//     separator: ';'
//   },
//   dist: {
//     src: ['src/**/*.js'],
//     dest: 'dist/<%= pkg.name %>.js'
//   }
// }

// module.exports = function(grunt) {

//     // Project configuration.
//     grunt.initConfig({
//         pkg: grunt.file.readJSON('package.json'),
//         sass: {
//             build: {
//                 options: {
//                     style: 'nested'
//                 },
//                 files: [{
//                     expand: true,
//                     src: ['src/styles/*.scss'],
//                     dest: 'build/styles/',
//                     ext: '.css',
//                     flatten: true
//                 }]

//                 // { // Dictionary of files
//                 //     'build/styles/mobile.css': 'src/styles/mobile.scss'
//                 // }
//             }
//         },
//         copy: {
//             build: {
//                 files: [{
//                         expand: true,
//                         src: ['src/scripts/*.js'],
//                         dest: 'build/scripts/',
//                         flatten: true
//                     }, // includes files in path and its subdirs
//                     {
//                         expand: true,
//                         src: ['src/*.html'],
//                         dest: 'build/',
//                         flatten: true
//                     } // includes files in path and its subdirs
//                 ]
//             }
//         }
//     });

//     // Load the plugin that provides the "uglify" task.
//     grunt.loadNpmTasks('grunt-contrib-sass');
//     grunt.loadNpmTasks('grunt-contrib-copy');

//     // Default task(s).
//     grunt.registerTask('default', ['copy', 'sass']);

// };