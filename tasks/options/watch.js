module.exports = {
	options: {
		livereload: true
	},
	styles: {
		files: '<%= dirs.src %>/styles/**/*.scss',
		tasks: ['sass:dev'],
		options: {
			debounceDelay: 1000,
			interval: 500,
			interrupt: true
		},
	},
	images: {
		files: '<%= dirs.src %>/images/**/*.{png,jpg,gif}',
		tasks: ['imagemin'],
		options: {
			debounceDelay: 1000,
			interval: 500,
			interrupt: true
		},
	},
	html: {
		files: '<%= dirs.src %>/*.html',
		tasks: ['copy:dev'],
		options: {
			debounceDelay: 1000,
			interval: 500,
			interrupt: true
		},
	}
	// scripts: {
	// 	files: '<%= dirs.src %>/scripts/**/*.js',
	//     tasks: ['uglify'],
	//     options: {
	//       interrupt: true,
	//     },
	// }
}