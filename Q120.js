class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    info() {
        return `${this.brand} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model);
        this.doors = doors;
    }

    details() {
        return `${this.info()} with ${this.doors} doors`;
    }
}

const car = new Car("Toyota", "Corolla", 4);
console.log(car.details());
