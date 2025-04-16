class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getWarranty() {
        return `Standard 1 year warranty for ${this.name}`;
    }
}

class PersonalCareProduct extends Product {
    getWarranty() {
        return `No warranty for personal care item: ${this.name}`;
    }
}

const phone = new Product("Smartphone", 699);
const shampoo = new PersonalCareProduct("Shampoo", 15);

console.log(phone.getWarranty());
console.log(shampoo.getWarranty());
