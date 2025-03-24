function Rectangle(length, width) {
    if (typeof length !== "number" || typeof width !== "number" || length <= 0 || width <= 0) {
        throw new Error("Invalid dimensions provided. Both length and width must be positive numbers.");
    }

    return {
        length,
        width,
        getPerimeter: function() {
            return 2 * (this.length + this.width);
        },
        getArea: function() {
            return this.length * this.width;
        },
        describe: function() {
            return `This rectangle has a length of ${this.length}, a width of ${this.width}, a perimeter of ${this.getPerimeter()}, and an area of ${this.getArea()}.`;
        },
        isSquare: function() {
            return this.length === this.width;
        },
        resize: function(newLength, newWidth) {
            if (typeof newLength !== "number" || typeof newWidth !== "number" || newLength <= 0 || newWidth <= 0) {
                throw new Error("Invalid new dimensions. Both length and width must be positive numbers.");
            }
            this.length = newLength;
            this.width = newWidth;
        }
    };
}

// Example usage
const myRectangle = Rectangle(10, 5);
console.log(myRectangle.describe());
console.log("Is it a square?", myRectangle.isSquare());
myRectangle.resize(7, 7);
console.log(myRectangle.describe());
console.log("Is it a square now?", myRectangle.isSquare());
