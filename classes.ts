//classes

class Animal {
    public animalName: string; //available everywhere
    private type: string; //available only inside class - not to children
    protected age: number = 2; //available only in children

    constructor(animalName: string, public species: string){
        this.animalName = animalName;
    }

    printAge(){
        console.log(this.age);
        this.setType('a young cub')
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const lion = new Animal('Rudy', 'lion');
console.log(lion);
console.log(lion.species, lion.animalName);
lion.printAge();
// lion.setType('awesome animal');  //won't work with private method

// static properties and methods
class Helpers {
    static PI: number = 3.14;
    static calculateCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
// static allows you to access a property
// or a method from within a class without
// instantiating that class
console.log(2 * Helpers.PI);
console.log(Helpers.calculateCircumference(22));

//abstract classes
// cannot be instantiated, must always be inherited (extended)
abstract class Project {
    projectName: string = "Default";
    budget: number;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

// let newProject = new Project();
// THE ABOVE THROWS AN ERROR AS PROJECT CANNOT BE INSTANTIATED
// THIS IS BECAUSE IT IS ABSTRACT - MUST ONLY BE EXTENDED
let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Maegan Takes Over the World');
console.log(newProject);
