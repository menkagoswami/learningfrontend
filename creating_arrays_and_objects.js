
//fun with strings
var greet = "hello";

//console.log(greet[4])
if(greet[1] == 'e'){

   // console.log("true");
}
//console.log(greet.charAt(2));


//Creating arrays and objects

var clothes = [];
clothes.push("top");
clothes.push("skirt");
clothes.push("jeans");
clothes.push("blazer");
clothes.push("sweater");

console.log(clothes);

var favphone = {
    color : "silver"
};

favphone.earbuds = true;

console.log(favphone);


//Object Methods
//1)

var bus = {
    color : "yellow",
    mileage : 85 + "KPH",
    variant : "petrol",
    automatic : function(){
        console.log("The Vehicle is automatic");
    },
    antibrakingsystem : function(){
        console.log("It has ABS");
    }
};

console.log(bus);
bus.antibrakingsystem();
bus.automatic();

//2)

var bus = {};
bus.color = "Blue";
bus.mileage = 90 + "KPH";
bus.variant = "Diesel";
bus.automatic = function(){
    console.log("Not automatic")
};
bus.antibrakingsystem = function(){
  console.log("Good ABS");
};

console.log(bus);
bus.antibrakingsystem();
bus.automatic();


//typeof

console.log(typeof "hello");

const random = ['tree', 795, [0, 1, 2]];
console.log(random[2]);


//

function addTwoNums(a,b){
    console.log(typeof a)
    try {
        if(typeof(a) != 'number'){
            throw ReferenceError("the first argument is not a number");
        }
        if(typeof(b) != 'number'){
            throw ReferenceError("the second argument is not a number");
        }
        console.log(a+b);
    } catch (err) {
        console.log("Error!", err);
    }
    
}

addTwoNums(5,"7");