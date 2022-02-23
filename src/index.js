"use strict";
exports.__esModule = true;
var inputs_1 = require("./inputs");
var processCardEvents_1 = require("./processCardEvents");
var start = process.hrtime();
var events = (0, inputs_1.generateInput)(1000000);
var result = (0, processCardEvents_1.processCardEvents)(events); // <--- We're implementing this guy!
var _a = process.hrtime(start), seconds = _a[0], nanoseconds = _a[1];
var milliseconds = Math.round(nanoseconds / 1e6);
console.log('output:\t', result);
console.log('========================');
console.log('n =', events.length.toLocaleString('en-US'), 'events');
console.log('t =', "".concat(seconds, ".").concat(milliseconds, " seconds"));
