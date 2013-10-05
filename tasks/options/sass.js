module.exports = {
	options: {
	},
	dev: {
		options: {
		},
		files: [
		{
		  expand: true,     // Enable dynamic expansion.
		  cwd: '<%= dirs.src %>/styles/',      // Src matches are relative to this path.
		  src: ['*.scss'], // Actual pattern(s) to match.
		  dest: '<%= dirs.dev %>/styles/',   // Destination path prefix.
		  ext: '.css',   // Dest filepaths will have this extension.
		}
		]
	},
	dist: {
		options: {
		},
		files: [
		{
		  expand: true,     // Enable dynamic expansion.
		  cwd: '<%= dirs.src %>/styles/',      // Src matches are relative to this path.
		  src: ['*.scss'], // Actual pattern(s) to match.
		  dest: '<%= dirs.tmp %>/styles/',   // Destination path prefix.
		  ext: '.css',   // Dest filepaths will have this extension.
		}
		]
	}
}