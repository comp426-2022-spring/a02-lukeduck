/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  return Math.random() > .5 ? 'heads' : 'tails';
}

// export { coinflip }
// console.log(coinFlip())

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  let array = [];
  for (let i=0; i<flips; i++) {
    array[i] = coinFlip();
  }
  return array;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  let h = 0;
  let t = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == "heads") {
      h++;
    } else if (array[i] == "tails") {
      t++;
    }
  }

  if (h !=0 && t != 0) {
    return {tails: t, heads: h};
  } 

  if (h == 0 && t == 0) {
    return {};
  }
  
  if (h == 0) {
    return {tails: t};
  }
  
  if (t == 0) {
    return {heads: h};
  }


}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  let flip = coinFlip();
  if (flip == call) {
    return {
      call: call,
      flip: flip,
      result: "win"
    }
    } else {
      return {
        call: call,
        flip: flip,
        result: "lose"
      }
    }
  }

/** Export 
 * 
 * Export all of your named functions
*/
