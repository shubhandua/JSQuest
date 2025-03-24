class Person {
    constructor(name, age) {
        if (typeof name !== "string" || typeof age !== "number" || age <= 0) {
            throw new Error("Invalid Person data: Name must be a string and age must be a positive number.");
        }
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, grades) {
        super(name, age);
        if (!Array.isArray(grades) || grades.some(g => typeof g !== "number" || g < 0 || g > 100)) {
            throw new Error("Invalid grades: Must be an array of numbers between 0 and 100.");
        }
        this.grades = grades;
    }

    getAverageGrade() {
        return this.grades.length > 0 
            ? (this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length).toFixed(2) 
            : "No grades available.";
    }

    describe() {
        return `${this.introduce()} I am a student with an average grade of ${this.getAverageGrade()}.`;
    }
}

// Example Usage
const student1 = new Student("Alice", 21, [85, 90, 78, 92]);
console.log(student1.describe());

const student2 = new Student("Bob", 19, []);
console.log(student2.describe());
