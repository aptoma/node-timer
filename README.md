@aptoma/timer
=============

A module for timing events. Relies on `process.hrtime()`.

Installation
------------

    npm install --save @aptoma/timer

Usage
-----

```js
var timer = require('@aptoma/timer');
var elapsed = timer('MyTimer');
// do stuff
console.log(elapsed());
// { name: 'MyEvent',
//   summary: 'MyEvent: 11495.606ms',
//   msec: 11495.605854,
//   hrtime: [11, 495605854]
// }

```

Under the hood, `timer()` simply records the current hrtime, and then calculates the diff whenever `elapsed()` is called.

The name you pass to `timer()` can be any valid string, and will be used in the `name` and `summary` fields of the return value of `elapsed()`.

The name does not have to be unique, you can create as many timers as you like with the same name.

`elapsed()` does not stop the timer, it can be called multiple times to track various offsets from the start time.
