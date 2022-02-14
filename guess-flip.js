import {flipACoin} from './modules/coin.mjs';
import minimist from 'minimist';

const args = (minimist)(process.argv.slice(2));
args["call"];
let call = args.call;

if (calll == "heads" || call == "tails") {
    console.log(flipACoin(call));
} else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
}