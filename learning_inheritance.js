// //prototype

// var automobile = {
//         brand : "TATA",
//         newlyLaunched: true,
//         available : true,
//         airbags : 4,

//         cost(){
//             console.log("cost is " + 0);
//         }
// }

// var punch = Object.create(automobile);

// console.log(punch);
// console.log("airbags: " + punch.airbags);
// console.log("available: " +punch.available);
// console.log("brand : " +punch.brand);
// console.log("newlyLaunched: " +punch.newlyLaunched);

// var nexon = Object.create(automobile);
// nexon.available = false;
// console.log(nexon);

// console.log("airbags: " +nexon.airbags);
// console.log("available: " +nexon.available);
// console.log("brand : " +nexon.brand);
// console.log("newlyLaunched: " + nexon.newlyLaunched);

// nexon.cost();




// // creating class


class Text {
    //passing defualt value 
    //  constructor(color = "Red", free = true) {
    //      this.color = color;
    //      this.free = free;
    //  }

    constructor(color, free) {
        this.color = "Red";
        this.free = true;
    }

    cost() {
        if (this.free == true)
            return 0;
        else
            return "$10";
    }

    getInfo(){
        console.log("color " + this.color);
        console.log("free " + this.free);
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log("Prototype of text " + proto );
    }
}

var textRoman = new Text("TextRoman" , "15","Jet-Black",false);
console.log(textRoman);

console.log(textRoman.cost());

textRoman.getPrototype();


//inheritance

class Calibri extends Text{
    constructor(font, fontsize, color, free) {
        super(color,free);
        this.font = font;
        this.fontsize = fontsize; 
        
     //   this.color = color;  
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log("Prototype of text " + proto );
    }
}

var calibri = new Calibri("sans-serif" , "12" , "Black" ,false);
console.log(calibri);
console.log(Object.getPrototypeOf(calibri));