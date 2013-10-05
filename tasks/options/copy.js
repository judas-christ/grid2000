module.exports = {
	options: {
	},
	dev: {
		options: {
		},
		files: [
			{
			  expand: true,     // Enable dynamic expansion.
			  cwd: '<%= dirs.src %>/',      // Src matches are relative to this path.
			  src: ['*.html'], // Actual pattern(s) to match.
			  dest: '<%= dirs.dev %>/',   // Destination path prefix.
			  ext: '.html',   // Dest filepaths will have this extension.
			}
		]
	},
	dist: {
		options: {
		},
		files: [
		{
		  expand: true,     // Enable dynamic expansion.
		  cwd: '<%= dirs.src %>/',      // Src matches are relative to this path.
		  src: ['*.html'], // Actual pattern(s) to match.
		  dest: '<%= dirs.tmp %>/',   // Destination path prefix.
		  ext: '.html',   // Dest filepaths will have this extension.
		}
		]
	}
}