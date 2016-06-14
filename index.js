'use strict';

module.exports = start;

/**
 * @typedef {Object} TimerEvent
 * @property {string} name
 * @property {string} summary
 * @property {float} msec
 * @property {Array} hrtime
 * @property {String} time Javascript timestamp of the end of the event
 */

/**
 * Start a timer
 *
 * Record the current high resolution timestamp from `process.hrtime()`, and return a function to call to get the
 * elapsed time.
 *
 * @param {string} name A label for this timer. Will be returned in the return value from the returned function.
 * @returns {Function} Function which returns a TimerEvent with the elapsed time since this timer was created
 */
function start(name) {
	var startTime = process.hrtime();

	return function () {
		return elapsed(startTime, name);
	};
}

/**
 * @param {Array} startTime
 * @param {string} name
 * @returns TimerEvent
 */
function elapsed(startTime, name) {
	var diff = process.hrtime(startTime);
	var msec = toMilliseconds(diff[0] * 1e9 + diff[1]);

	return {
		name: name,
		summary: name + ': ' + parseFloat(msec.toFixed(3)) + 'ms',
		msec: msec,
		hrtime: diff,
		time: Date.now()
	};
}

function toMilliseconds(nanoseconds) {
	return nanoseconds / 1000 / 1000;
}
