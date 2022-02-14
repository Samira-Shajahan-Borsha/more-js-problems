const products = [
    {name: 'laptop', price:43000},
    {name: 'shirt', price: 500},
    {name: 'watch', price: 3680},
    {name: 'phone', price: 55000}
];
let totaPrice = 0;
for(const product of products){
    totaPrice = totaPrice + product.price;
}
// console.log(totaPrice);


const cart = [
    {name: 'laptop', price:43000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 8},
    {name: 'watch', price: 3680, quantity: 3},
    {name: 'phone', price: 55000, quantity: 1}
];
let cartTotal = 0;
for(const product of cart){
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);