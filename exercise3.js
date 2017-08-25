"use strict";
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
// Exercise 1 - basic class
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
// Exercise 2 - INHERITANCE - Two objects, based on each other ...
var BaseObject = (function () {
    function BaseObject() {
        this.width = 5; // typescript can infer type
        this.length = 5; // typescript can infer type
    }
    return BaseObject;
}());
;
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
console.log(rectangle.calcSize());
rectangle.width = 22;
rectangle.length = 15;
console.log(rectangle.calcSize());
console.log(('............................'));
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// ES5 supports getters and setters
// type tsc -t ES5 when compiling if this is an issue
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
