function processEmployees(employees) {
    return employees
        .filter(emp => emp.performance >= 70)
        .sort((a, b) => b.performance - a.performance)
        .map(emp => ({ name: emp.name, newSalary: emp.salary * 1.1 }));
}

const employees = [
    { name: "Alice", department: "HR", performance: 85, salary: 50000 },
    { name: "Bob", department: "IT", performance: 92, salary: 60000 },
    { name: "Charlie", department: "Finance", performance: 67, salary: 55000 },
    { name: "David", department: "IT", performance: 73, salary: 58000 },
    { name: "Eve", department: "HR", performance: 95, salary: 62000 }
];

console.log(processEmployees(employees));
