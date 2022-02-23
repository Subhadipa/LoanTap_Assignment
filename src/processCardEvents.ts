import { CardEvent, Transaction } from './types'
import  {cardEventsFromDifferentCards} from './inputs/cardEventsFromDifferentCards'
type CardTransactionMapping = {
  [cardId: string]: Transaction
}

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
export const processCardEvents = (cardEvents: CardEvent[]): CardTransactionMapping => {

  // logic
  for(let i=0;i<=cardEvents.length;i++)
  {
     // console.log(cardEvents[i])
     if(cardEventsFromDifferentCards.cardId)
     {
          if(cardEventsFromDifferentCards.type==='RESERVATION'&&cardEventsFromDifferentCards.type==='CONFIRMATION'&&cardEventsFromDifferentCards.type==='CANCELLATION')
          {
            console.log("Done");
          }
          else
          {
            console.log("Not Done");
          }
     }
  }
  return {} as CardTransactionMapping
}
