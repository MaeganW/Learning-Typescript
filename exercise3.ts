// Exercise 1 - basic class
class Car2 {
    name: string;
    acceleration: number = 0;

    constructor(name: string){
        this.name = name;
    }
 
    honk() {
        console.log("Toooooooooot!");
    };
 
    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}
const newCar = new Car2("BMW");
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
class BaseObject {
    width = 5;  // typescript can infer type
    length = 5;  // typescript can infer type
};

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
console.log(rectangle.calcSize());
rectangle.width = 22;
rectangle.length = 15;
console.log(rectangle.calcSize());

console.log(('............................'));
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// ES5 supports getters and setters
// type tsc -t ES5 when compiling if this is an issue
class Person {
    private _firstName: string = "Lily";

    get firstName(){
        return this._firstName;
    }

    set firstName(x: string) {
        if (x.length > 3){
            this._firstName = x;
        } else {
            this._firstName = "Lily"
        }
    }
    enumerable: true;
    configurable: true;
};
const Maegan = new Person();
console.log(Maegan.firstName);
Maegan.firstName = "Ma";
console.log(Maegan.firstName);
Maegan.firstName = "Maegan";
console.log(Maegan.firstName);