import { calculateFullAmount } from "./calculateCoffeeAmount";

//in ml
const bucket = 10000;
const bathtub = 150000;
const swimmingPool = 5000000;
const ammersee = 1750000000000000000;

const values = [
   {
    name: bucket,
    volume: 10000
   },
   {
    name: bathtub,
    volume: 150000
   },
   {
    name: swimmingPool,
    volume: 5000000
   },
   {
    name: ammersee,
    volume: 1750000000000000000
   },   
];

let percentage = 0;

export function percentageOf() {
    const amount = calculateFullAmount();
    values.forEach(function (arrayItem) {
        percentage = amount / arrayItem['volume'];
        console.log(percentage*100 + "%");

        //if percentage is over 100, add one more and write "more than ... buckets"
    });
}


