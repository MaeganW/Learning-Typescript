"use strict";
//assign types
var hello = "hello";
hello = "howdy";
console.log(typeof hello);
//arr
var arr = ["hello", "goodbye"];
var newArr = arr.concat([1, 2, 3]);
//tuple
var address = ["Sylena", 200];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Purple"] = 99] = "Purple";
    Color[Color["Blue"] = 100] = "Blue";
})(Color || (Color = {}));
var thiscolor = Color.Red;
console.log(thiscolor);
//returns 0
var seccolor = Color.Purple;
console.log(seccolor);
//returns 99
var thirdcolor = Color.Purple;
console.log(thirdcolor);
//returns 100
//any
var car = "bmw";
console.log(car);
car = { brand: 'bmw', series: 3 };
console.log(car);
//try to avoid using 'any' because it gives up the advantages of using types
//functions
var greet = function () {
    return hello;
};
console.log(greet());
//void = means there is nothing to be returned
var myVoid = function () {
    console.log('This returns nothing');
};
myVoid();
//argument types
var multiply = function (val1, val2) {
    return val1 * val2;
};
console.log(multiply(10, 4));
//function types - specifies what type of functions this variable will be able to hold
var newMultiply;
// newMultiply = greet;    THIS WILL ERROR
newMultiply = multiply;
console.log(newMultiply(77, 88));
