"use strict";
exports.__esModule = true;
exports.processCardEvents = void 0;
/**
 * Write a function that receives a large batch of card events from multiple cards,
 * returning an object which maps from cardId -> valid transaction. Only cardIds with
 * a valid transaction should appear in the returned object.
 *
 * A valid transaction is a pair of card events, starting with a RESERVATION event
 * and finishing with either a CONFIRMATION or CANCELLATION event.
 *
 * The input is an array of unprocessed card events. Some events might be duplicated
 * or missing. For duplicated events, you may only use one of its occurrences and
 * discard the rest. Missing events invalidate the transaction.
 *
 * @param cardEvents CardEvent[] List of card events
 * @returns CardTransactionMapping Valid transactions grouped by cardId
 */
var processCardEvents = function (cardEvents) {
    // logic
    for (var i = 0; i <= cardEvents.length; i++) {
        console.log(cardEvents[i]);
    }
    return {};
};
exports.processCardEvents = processCardEvents;
