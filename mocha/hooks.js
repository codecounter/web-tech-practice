describe('hooks', function() {
	before('before', function() {
		console.log('before');
	});
	beforeEach(function(done) {
		console.log('before each');
		setTimeout(done, 1000);
	});
	after(function() {
		console.log('after');
	});
	afterEach(function() {
		console.log('after each');
	});

	describe('sub1', function() {
		before(function() {
			// after 'before', but before 'before each'
			console.log('sub1:before');
		});
		it('sub1-it1', function() {

		});
		it('sub1-it2', function() {

		});
	});

	describe('sub2', function() {
		it('sub2-it1', function() {
			
		});
		it('sub2-it2', function() {

		});
	});
});