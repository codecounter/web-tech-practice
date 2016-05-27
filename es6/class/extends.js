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

class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);
		this.color = color;
	}

	toString() {
		return this.color + ' ' + super.toString();
	}
}

var point = new Point(1, 3);

console.log(point.toString());

var cpoint = new ColorPoint(1, 3, 'red');

console.log(cpoint.toString());