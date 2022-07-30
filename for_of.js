//using for in and for of loop 

var arr = [1,2,3,4,5];

for(a in arr){
    console.log(arr[a]);
}

const car = {
    speed: 100,
    color: "blue"
}

for(a of Object.values(car)){
    console.log(a);
}


