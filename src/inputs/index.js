"use strict";
exports.__esModule = true;
exports.generateInput = void 0;
var cardEventsFromDifferentCards_1 = require("./cardEventsFromDifferentCards");
var incompleteCardEvents_1 = require("./incompleteCardEvents");
var events = []
    .concat(cardEventsFromDifferentCards_1.cardEventsFromDifferentCards)
    .concat(incompleteCardEvents_1.incompleteCardEvents);
var generateInput = function (n) {
    var length = Math.floor(n / events.length);
    return Array.from({ length: length }, function () { return events; }).flat();
};
exports.generateInput = generateInput;
