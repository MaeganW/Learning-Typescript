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
