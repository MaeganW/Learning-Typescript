"use strict";
var Car2 = (function () {
    function Car2(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car2.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car2.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car2;
}());
var newCar = new Car2("BMW");
newCar.honk();
console.log(newCar.acceleration);
newCar.accelerate(10);
console.log(newCar.acceleration);
newCar.accelerate(50);
console.log(newCar.acceleration);
newCar.accelerate(5);
console.log(newCar.acceleration);
console.log(('............................'));
// Exercise 2 - Two objects, based on each other ...
var BaseObject = (function () {
    function BaseObject() {
        this.width = 5;
        this.length = 5;
    }
    BaseObject.prototype.calcSize = function (width, length) {
        return this.width * this.length;
    };
    return BaseObject;
}());
;
var rectangle = new BaseObject();
console.log(rectangle.calcSize());
rectangle.width = 22;
rectangle.length = 15;
console.log(rectangle.calcSize());
// console.log(rectangle.calcSize(3, 3));
console.log(('............................'));
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Person = (function () {
    function Person() {
        this._firstName = "Lily";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (x) {
            if (x.length > 3) {
                this._firstName = x;
            }
            else {
                this._firstName = "Lily";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
;
var Maegan = new Person();
console.log(Maegan.firstName);
Maegan.firstName = "Ma";
console.log(Maegan.firstName);
Maegan.firstName = "Maegan";
console.log(Maegan.firstName);
