//eg
const basket = ["apples", "oranges", "grapes"];
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//or
basket.forEach(item => {
    console.log(item);
})

// FOR OF LOOP
//eg
for (item of basket) {
    console.log(item);
}


//FOR IN LOOP
//eg
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes:1000
}
for (item in detailedBasket) {
    console.log(item);
}