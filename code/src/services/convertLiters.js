import { calculateFullAmount } from "./calculateCoffeeAmount";

//in ml
// const bucket = 10000;
// const bathtub = 150000;
// const swimmingPool = 5000000;
// const ammersee = 1750000000000000000;

const values = [
   {
    name: 'bucket',
    volume: 10000
   },
   {
    name: 'bathtub',
    volume: 150000
   },
   {
    name: 'swimmingPool',
    volume: 5000000
   },
   {
    name: 'ammersee',
    volume: 1750000000000000000
   },   
];

let percentageForCalculation = 0;

export function percentageOf() {
    const amount = calculateFullAmount();
    let percentageArray = []
    values.forEach(function (arrayItem) {
        percentageForCalculation = amount / arrayItem['volume'];
        console.log(percentageForCalculation*100 + "%");
        percentageArray.push({
            name: arrayItem['name'].toString(), 
            percentage: percentageForCalculation * 100
        })
        
        //if percentage is over 100, add one more and write "more than ... buckets"
    });
    return percentageArray
}

export function getEachPercentageOf(name) {
    const amount = calculateFullAmount();
    let percentageArray = []
    values.forEach(function (arrayItem) {
        if (arrayItem['name']==name)
        percentageForCalculation = (amount / arrayItem['volume'])*100;
        console.log(percentageForCalculation*100 + "%");
        
        //if percentage is over 100, add one more and write "more than ... buckets"
    });
    return percentageForCalculation
}


