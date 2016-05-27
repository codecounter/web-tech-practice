"use strict";

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}
}

var point = new Point(1, 3);

console.log(point.toString());