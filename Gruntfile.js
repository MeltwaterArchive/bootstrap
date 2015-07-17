module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// SASS compiler
		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'dist/css/bootstrap.css': 'sass/bootstrap.scss'
				}
			}
		},

		// minify the CSS
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'dist/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		},

		// check the generated CSS
		csslint: {
			strict: {
				options: {
					import: 2
				},
				src: ['dist/css/bootstrap.css']
			}
		},

		// Compress everything into a ZIP
		compress: {
			main: {
				options: {
					archive: 'datasift-bootstrap-<%= pkg.version %>.zip',
					mode: 'zip',
					level: 9,
					pretty: true
				},
				files: [{
					expand: true,
					cwd: 'dist/',
					src: ['**'],
					dest: 'datasift-bootstrap-<%= pkg.version %>'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['sass', 'cssmin', 'csslint', 'compress']);
};