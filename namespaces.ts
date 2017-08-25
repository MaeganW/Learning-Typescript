// ====NAMESPACES AND MODULES====

namespace MyMath {
    const PI = 3.14;
    export const calcCirc = (diameter: number) => {
        return diameter * PI;
    }
    export const calcRec = (width: number, height: number) => {
        return width * height;
    }
}

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