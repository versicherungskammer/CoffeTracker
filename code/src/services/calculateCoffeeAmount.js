import {getRows} from "src/pages/Statistik.vue"

export function calculateFullAmount() {
    let rows = getRows();
    let sum = 0;

    rows.forEach(function (arrayItem) {
        let fillingAmount = arrayItem['fillingAmount']; 
        let amount = arrayItem['amount']
        sum += fillingAmount * amount;
    });
    return sum;      
}