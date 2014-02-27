var _ = require('lodash-node');

module.exports = function( grunt ){

	var libs = [
		'lodash-node'	
	];
	
	grunt.config.init({
		
		browserify: {
			options: {
				alias: [
					'lodash-node/underscore:underscore'
				],
				external: [ 'lodash-node/underscore' ]
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

		watch: {
			files: [ 'src/**/*.js' ],
			tasks: [ 'browserify' ]
		},



	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('default', ['browserify'] );
	
};
