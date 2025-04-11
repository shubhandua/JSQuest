class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getDetails() {
        return `${this.name}, ${this.age} years old, lives in ${this.city}`;
    }
}

const person = new Person("Alice", 30, "New York");
console.log(person.getDetails());
