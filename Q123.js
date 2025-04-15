class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getSalary() {
        return this.baseSalary;
    }
}

class Manager extends Employee {
    constructor(name, baseSalary, bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    getSalary() {
        return this.baseSalary + this.bonus;
    }
}

const emp = new Employee("Alice", 5000);
const mgr = new Manager("Bob", 7000, 2000);

console.log(emp.getSalary());
console.log(mgr.getSalary());
