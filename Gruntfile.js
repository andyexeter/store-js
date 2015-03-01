'use strict';
module.exports = function(grunt) {
	
	grunt.option('stack', true);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		// Delete contents of the build directory
		clean: {
			build: ['build/']
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			build: {
				src: 'src/store.js',
			},
			grunt: {
				options: {
					node: true
				},
				src: 'Gruntfile.js'
			}
		},
		copy: {
			build: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: '**/*.js',
					dest: 'build/'
					
				}],
			}
		},
        concat: {
			readme: {
				options: {
					process: true
				},
				src: 'src/docs/*.md',
				dest: 'README.md'
			}
        },
		uglify: {
			build: {
				src: 'build/store.js',
				dest: 'build/store.min.js'
			},
			jqueryPlugin: {
				src: 'build/jquery-store/jquery.store.js',
				dest: 'build/jquery-store/jquery.store.min.js'
			}
		},
		watch: {
			options: {livereload: true, spawn: false},
			less: {
				files: ['src/assets/less/*.less'],
				tasks: ['less']
			},
			js: {
				files: ['src/assets/js/*.js'],
				tasks: ['jshint:build', 'concat', 'uglify']
			},			
			markup: {
				files: ['src/*.php'],
				tasks: ['copy:markup']
			},
			grunt: {
				options: {livereload: false},
				files: ['Gruntfile.js'],
				tasks: ['jshint:grunt']
			},
			livereload: {
				files: ['build/assets/css/style.css']
			}
		}

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'jshint:build', 'copy:build', 'uglify', 'concat:readme']);

};