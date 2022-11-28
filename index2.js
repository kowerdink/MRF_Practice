const dollars = ["32$", "15$", "12$", "17$", "20$"];

//Map
let prices =[]
prices = dollars.map((dolar) => Number(dolar.slice(0, dolar.length -1)))

console.log(prices)

//Reduce

//Filter