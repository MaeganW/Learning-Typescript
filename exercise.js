"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Maegan',
    bankAccount: bankAccount,
    hobbies: ["crochet", "programming"]
};
myself.bankAccount.deposit(55);
console.log(myself);
