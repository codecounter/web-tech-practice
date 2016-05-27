
var async = function(callback) {
	setTimeout(function() {
		callback();
	}, 1000);
}

var asyncAlwaysFail = function(success, failure) {
	setTimeout(function() {

	}, 1000);
}

describe('async', function() {
	it('async1', function(done) {
		async(function() {
			done();
		});
	});
	it('async2', function(done) {
		async(done);
	});

	// it will failed when 2000ms passed
	it('fail', function(done) {
		asyncAlwaysFail(done);
	});
});