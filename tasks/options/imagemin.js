module.exports = {
	dist: {
		files: [{
		        expand: true,                  // Enable dynamic expansion
		        cwd: '<%= dirs.src %>/images/',                   // Src matches are relative to this path
		        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
		        dest: '<%= dirs.dev %>/images/'                  // Destination path prefix
		    }]
		}
	}