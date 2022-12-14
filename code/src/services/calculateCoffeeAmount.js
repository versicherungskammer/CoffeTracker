import {getRows} from "src/pages/Statistik.vue"

export function calculateFullAmount() {
    let rows = getRows();
    let sumInMilliliters = 0;

    rows.forEach(function (arrayItem) {
        let fillingAmount = arrayItem['fillingAmount']; 
        let amount = arrayItem['amount']
        sumInMilliliters += fillingAmount * amount;
    });
    return sumInMilliliters;      
}