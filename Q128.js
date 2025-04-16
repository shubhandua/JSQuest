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

    transfer(amount, targetAccount) {
        if (amount > this.balance) return 'Insufficient funds for transfer';
        this.withdraw(amount);
        targetAccount.deposit(amount);
        return `Transferred ${amount} to ${targetAccount.owner}`;
    }
}

const acc1 = new BankAccount("Alice", 1000);
const acc2 = new BankAccount("Bob", 500);

console.log(acc1.transfer(300, acc2));
console.log(acc1.balance);
console.log(acc2.balance);
