class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}

class Ebook extends Book {
    constructor(title, author, price, discount) {
        super(title, author, price);
        this.discount = discount;
    }

    getPrice() {
        return this.price - this.discount;
    }
}

const book = new Book("The Alchemist", "Paulo Coelho", 20);
const ebook = new Ebook("The Alchemist", "Paulo Coelho", 20, 5);

console.log(book.getPrice());
console.log(ebook.getPrice());
