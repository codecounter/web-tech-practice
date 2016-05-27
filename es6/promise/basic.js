var p1 = new Promise(function(resolve, reject) {
	resolve('success message');
});

p1.then(function(msg) {
	console.log(msg);
}).catch(function(err) {
	console.log(err);
});

var p2 = new Promise(function(resolve, reject) {
	reject('failure message');
});

console.log(p2.PromiseStatus);

p2.then(function(msg) {
	console.log(msg);
}).catch(function(err) {
	console.log(err);
});

console.log(p2.PromiseStatus);