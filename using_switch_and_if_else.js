var age=20;
if(age >=65 ){
    console.log("You get your income from your pension");
}
else if(age >=18 && age <65){
    console.log("Each month you get a salary");
}else if(age > 18){
    console.log("You get an allowance");
}else
    console.log("The value of the age variable is not numerical");

   
var day="Sunday";
switch(day){
    case 'Monday': 
        console.log("Its a Monday");
        break;

    case 'Tuesday':
        console.log("Its a tuesday");
        break;

    case 'Wednesday':
        console.log("Its a Wednesday")
        break;

    case 'Thursay':
        console.log("Its a Thursday");
        break;

    case 'Friday':
        console.log("Its a fun day");
        break;

    case 'Saturday':
        console.log("Its Weekend");
        break;

    case 'Sunday':
        console.log("Its a movie day");
        break;

    default:  
        console.log("There is no such day");  

}    

bool