'use strict';

var assert = require('chai').assert;
var timer = require('./');

describe('timer', function () {
	describe('start()', function () {
		it('should return a function', function () {
			var elapsed = timer('foo');

			assert.isFunction(elapsed);
		});
	});

	describe('elapsed()', function () {
		it('should return a timer event object', function () {
			var elapsed = timer('foo');
			var timerEvent = elapsed();

			assert.deepEqual(['name', 'summary', 'msec', 'hrtime'], Object.keys(timerEvent));
			assert.equal('foo', timerEvent.name);
		});
	});
});
