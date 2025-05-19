function maxProfit(prices){
    let minSoFar = prices[0];
    let result = 0;

for(let i = 1; i < prices.length; i++){
    minSoFar = Math.min(minSoFar, prices[i]);

    result = Math.max(result, prices[i] - minSoFar);
}
return result;
}
console.log(maxProfit([7, 10, 1, 3, 6, 9, 2]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 3, 6, 9, 11]));