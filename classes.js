"use strict";
//classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// static properties and methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calculateCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
// static allows you to access a property
// or a method from within a class without
// instantiating that class
console.log(2 * Helpers.PI);
console.log(Helpers.calculateCircumference(22));
//abstract classes
// cannot be instantiated, must always be inherited (extended)
var Project = (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
// let newProject = new Project();
// THE ABOVE THROWS AN ERROR AS PROJECT CANNOT BE INSTANTIATED
// THIS IS BECAUSE IT IS ABSTRACT - MUST ONLY BE EXTENDED
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Maegan Takes Over the World');
console.log(newProject);
//getters and setters
var Plant = (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        //watch for this error:
        //A 'set' accessor cannot have a return type annotation.
        //this means that I tried to say
        //set species(value: string): string { func logic here...}
        //this is incorrect syntax for a setter
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); // this will grab the default
// the above console log is calling the get species method,
// but it is calling it like a property instead of a method,
// which normally would be called as console.log(plant.species());
plant.species = "XY";
console.log(plant.species); //thiis is also default
plant.species = "Maegan's Plant";
console.log(plant.species); //this will return "Maegan's Plant"
