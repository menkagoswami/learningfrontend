// template literals


let a = 'heloo';
let b = 'world!';

console.log(a + " " +'\n' +b);
console.log(`${a} ${b}`);

let p = `Hi all! 
I am learning Java script.`

let q = ` I am finding
 it interesting.`
console.log(`${p} ${q}`);


let price = 10;
let quantity = 20;

let result = `the cost of item is ${price * quantity}. The quantity should be less than ${quantity} as price has increased to ${price}`;
console.log(result);