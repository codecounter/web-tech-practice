define(['underscore'], function(_) {
	return {
		add: function(a, b) {
			return a + b;
		},
		times: function(a, b) {
			return a * b;
		},
		random: function(min, max) {
			return _.random(min, max);
		}
	};
});