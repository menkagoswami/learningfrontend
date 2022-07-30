


function letterFinder( word,  match){
    for(var i=0 ;i <word.length ;i++){
        if(word[i] == match)
            console.log("Found the " + match + " at " + i );
        else
            console.log("No match found at " + i);
    }
    
}

//console.log(letterFinder("test","t"));

//screen = true;
letterFinder("test","e")

//create object
var automobile = {
    tyres : 4,
    mileage : 60+'KPH',
    speed : 120,
    variant : "petrol"
}

//console.log(automobile.mileage);


//another way
var automobile = {};
    automobile.tyres = 4;
    automobile.color = "silver";
    automobile.version = "diesel";

console.log(automobile);    

//arrays

var fruits = [];
fruits.push("apple");
fruits.push("mango");
fruits.push("litchi");
fruits.push("kiwi");

console.log(fruits);

fruits.pop();
console.log(fruits);


