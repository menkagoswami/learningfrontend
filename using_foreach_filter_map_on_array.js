//using foreach

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const cars = ['nexon', 'bmw', "tiago", "swiftdesire"];

function addIndex(cars, index){
    console.log(`${index}. ${cars}`);
}

cars.forEach(addIndex);

//using filter 

function length(s){
    return s.length > 4;
}

console.log(cars.filter(length));

//using map

let nums = [2,5,7,8,12];

function div(num){
    return num/2;
}

console.log(nums.map(div));

console.log(nums);
