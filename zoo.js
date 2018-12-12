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