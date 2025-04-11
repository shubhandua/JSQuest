class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount > this.balance) return 'Insufficient funds';
        this.balance -= amount;
        return this.balance;
    }
}

const account = new BankAccount("John", 1000);
console.log(account.deposit(500));
console.log(account.withdraw(300));
console.log(account.withdraw(1500));
