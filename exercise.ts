type BankAccount = {money: number, deposit: (val: number) => void};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
}

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: 'Maegan',
    bankAccount: bankAccount,
    hobbies: ["crochet", "programming"]
}

myself.bankAccount.deposit(55);
console.log(myself);