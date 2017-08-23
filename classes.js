"use strict";
//classes
var Animal = (function () {
    function Animal(animalName, species) {
        this.species = species;
        this.animalName = animalName;
    }
    return Animal;
}());
var lion = new Animal('Rudy', 'lion');
console.log(lion);
console.log(lion.species, lion.animalName);
