"use strict";
//classes
var Animal = (function () {
    function Animal(animalName, species) {
        this.species = species;
        this.age = 2; //available only in children
        this.animalName = animalName;
    }
    Animal.prototype.printAge = function () {
        console.log(this.age);
        this.setType('a young cub');
    };
    Animal.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Animal;
}());
var lion = new Animal('Rudy', 'lion');
console.log(lion);
console.log(lion.species, lion.animalName);
lion.printAge();
// lion.setType('awesome animal');  //won't work with private method 
