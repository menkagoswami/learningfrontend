var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(arr) {
    for (item of Object.keys(dairy)) {
        console.log(dairy[item]);
    }
}

logDairy(dairy);




// assigmnent

// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(arr) {
    for (item of Object.keys(dairy)) {
        console.log(dairy[item]);
    }
}
logDairy(dairy);


// Task 2

const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (a of Object.entries(bird)) {
        console.log(a);
    }   
}

birdCan();

// Task 3

function animalCan() {
    for (a in bird) {
        console.log(a);
    }
}

animalCan();