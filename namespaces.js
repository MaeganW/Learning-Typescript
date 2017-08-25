"use strict";
// ====NAMESPACES AND MODULES====
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    MyMath.calcCirc = function (diameter) {
        return diameter * PI;
    };
    MyMath.calcRec = function (width, height) {
        return width * height;
    };
})(MyMath || (MyMath = {}));
console.log(MyMath.calcCirc(2));
console.log(MyMath.calcRec(3, 7));
console.log('just another rec: ', MyMath.calcRec(4, 7));
//if you want to separate the MyMath namespace into two files containing
// either function, you can do this, just make sure to put them
// inside a namespace MyMath {} in each file
//then at compilation time, type out
// tsc --outFile yourGoalFile.js source1.ts source2.ts source3.ts
//But there is an easier way...
//Just import the files from the namespace files
//ES6 has a special syntax for importing namespaces
//WATCH LESSON 72 TO USE THE REFERENCE SYNTAX
//FOR IMPORTING NAMESPACES
//You can also have namespaces nested within namespaces
// ====MODULES====
//need to install a module loader
//npm install systemjs --save
//REFER TO LESSON 76 FOR MORE INFO ABOUT
//USING MODULES AND THE SETUP FOR THE 
//MODULE LOADER 
