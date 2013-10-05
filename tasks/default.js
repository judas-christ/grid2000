module.exports = function(grunt) {
	grunt.registerTask('default', ['sass:dev','imagemin','copy:dev','connect:dev:open','watch']);
};