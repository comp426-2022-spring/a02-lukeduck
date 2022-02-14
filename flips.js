import {coinFlips, countFlips} from "./modules/coin.mjs";
import minimist from 'minimist';

// number CL argument
const args = minimist(process.argv.slice(2));
args['number'];
let number = args.number || 1;

let flips = coinFlips(number);
console.log(flips);
console.log(countFlips(flips));