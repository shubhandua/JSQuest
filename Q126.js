class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }

    addBranch(branchName) {
        this.branches.push(branchName);
    }

    listBranches() {
        return this.branches;
    }
}

const bank = new Bank("National Bank");
bank.addBranch("Downtown");
bank.addBranch("Uptown");

console.log(bank.listBranches());
