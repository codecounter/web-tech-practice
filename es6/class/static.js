"use strict";

class Point {
	static create(x, y) {
		return new Point(x, y);
	}

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}

}

var point = Point.create(2, 3);
console.log(point.x, point.y);