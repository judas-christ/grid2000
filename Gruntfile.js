module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            build: {
                options: {
                    style: 'nested'
                },
                files: { // Dictionary of files
                    'build/styles/main.css': 'src/styles/main.scss'
                }
            }
        },
        copy: {
            build: {
                files: [{
                        expand: true,
                        src: ['src/scripts/*.js'],
                        dest: 'build/scripts/',
                        flatten: true
                    }, // includes files in path and its subdirs
                    {
                        expand: true,
                        src: ['src/*.html'],
                        dest: 'build/',
                        flatten: true
                    } // includes files in path and its subdirs
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'sass']);

};