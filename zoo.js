//var favoriteFood = "bacon";

function run(){
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmellows");
    rarity.sleep();
    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    gemma.sleep();
}

class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        (this.favoriteFood == food) ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep(this.name);
    }
}



class Tiger extends Animal {
    constructor(name) {
        super(name, "meat");
    }
}

class Bear extends Animal {
    constructor(name) {
        super(name, "fish");
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal {
    constructor(name) {
        super(name, "marshmellows");
    }
    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
}
/*Implement the Giraffe class as a subclass of Animal. Giraffes are vegetarian, so they only eat leaves.
If you feed "leaves" to a Giraffe, they will happily tell you "YUM!!! <name> wants more leaves" after eating them
(just like how Tigers respond to "meat") and then sleep.

However, if you feed them anything else, they will shout "YUCK!!! <name> will not eat <food>" to let you know they
don't like what you fed them. You'll need to override the eat method for the Giraffe class to model this behavior.
When eating leaves, you can call the superclass's implementation of the eat method - super.eat(‘leaves’) - to avoid
having to repeat code unnecessarily.
*/
class Giraffe extends Animal {
    constructor(name) {
        super (name, "leaves");
    }
    eat(food) {
        (food == "leaves") ? super.eat("leaves") : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
}


// class Bear {
//     constructor(name) {
//         this.name = name;
//         this.favoriteFood = "fish";
//     }
//     sleep() {
//         console.log(this.name + "hibernates for 4 months");
//     }
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         (this.favoriteFood == food) ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep(this.name);
//     }
// }

// function sleep(name){
//     console.log(name + " sleeps for 8 hours");
// }
//
// function eat(name, food){
//     console.log(name + " eats " + food);
//     (favoriteFood == food) ? console.log("YUM!!! " + name + " wants more " + food) : sleep(name);
//
// }


// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
// class Polygon extends Shape {
//
//     constructor(height, width) {
//         super('Polygon');
//         this.height = height;
//         this.width = width;
//     }
//
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }
