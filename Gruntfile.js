var _ = require('lodash-node');

module.exports = function( grunt ){

	var libs = [
		'lodash-node'	
	];
	
	grunt.config.init({
		
        clean: [ 'www/*.js' ],

		browserify: {
			options: {
				alias: [
					'lodash-node/underscore:underscore',
					'backbone:backbone'
				],
				external: [ 
					'lodash-node/underscore',
					'backbone'
				],
                debug: true
			},
			common: {
				src: [ 'src/common.js' ],
				dest: 'www/common.js',
				options: {
					external: []
				}
			},
			p1: {
				src: [ 'src/p1.js' ],
				dest: 'www/p1.js',
			},
			p2: {
				src: [ 'src/p2.js' ],
				dest: 'www/p2.js',
			}
		},

        concat: {
            main:{
                src: [
                    'www/*.js',
                ],
                dest: 'www/all.js'
            }
        },

		watch: {
			files: [ 'src/**/*.js' ],
			tasks: [ 'js' ]
		}



	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('js', [ 'clean', 'browserify', 'concat' ] );

	grunt.registerTask('default', [ 'js' ] );
	
};
