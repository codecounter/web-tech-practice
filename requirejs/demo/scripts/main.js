requirejs.config({
	baseUrl: 'scripts',
	paths: {
		util: 'helper/util',
		underscore: '../lib/underscore',
		math: 'helper/math'
	},
	shim: {
		math: {
			exports: 'math'
		}
	}
});

require(['util', 'math'], function(util, math) {
	console.log(util.add(2, 3)); // 5
	console.log(util.times(2, 3)); // 6
	console.log(util.random(1, 10));

	console.log(math.minus(8, 2)); // 6
	console.log(math.devide(8, 2)); // 4
});