//1..Parameters are essentially passed to functions by value 

let user = "Menka";

function updateUser(user) {
    user = "Sandeep";
    console.log(user);
}
updateUser("menka");
console.log(user);


//2..Object's case is different

var car = {
    automatic: true,
    color: "Silver"
};

console.log(car.automatic);

function updateObject(obj) {
    obj.automatic = false;
}
//before calling the function
console.log(car.automatic);

//after calling the function
updateObject(car);

console.log(car.automatic);

//3.. Arrays's change is also visible outside the funciton

var arr = [1, 2, 3, 4];

console.log(arr);

function updateArr(arr) {
    arr[2] = 10;
}
//before calling the function
console.log(arr);

//after calling the function
updateArr(arr);
console.log(arr);


