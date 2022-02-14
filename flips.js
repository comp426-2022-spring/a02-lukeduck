// import functions
import * as coin from  "./modules/coin.mjs";
import minimist from 'minimist';

// number CL argument
const args = minimist(process.argv.slice(2));
argv["number"];
let number = args.number || 1;

let flips = coin.coinFlips(number);
console.log(flips);
console.log(coin.countFlips(flips));