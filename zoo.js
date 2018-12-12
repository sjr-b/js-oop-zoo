var favoriteFood = "bacon";

function run(){
    sleep("Tigger");
    eat("Tigger", "meat");
    eat("Tigger", "bacon");

}

function sleep(name){
    console.log(name + " sleeps for 8 hours");
}

function eat(name, food){
    console.log(name + " eats " + food);
    (favoriteFood == food) ? console.log("YUM!!! " + name + " wants more " + food) : sleep(name);
}

class Tiger {

    constructor(name) {
        this.name = name;
        this.favoriteFood = "bacon";
    }

    sleep() {
        // complete your sleep function here

    }

    eat(food) {
        // complete your eat function here!

    }

}
