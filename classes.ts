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