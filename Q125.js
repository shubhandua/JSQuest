class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    makeSound() {
        return `${this.name} barks`;
    }
}

const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy");

console.log(animal.makeSound());
console.log(dog.makeSound());
