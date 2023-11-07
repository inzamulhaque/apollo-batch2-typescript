"use strict";
{
    {
        class BankAccount {
            // protected _balance: number;
            constructor(id, name, balance) {
                this.id = id;
                this.name = name;
                this._balance = balance;
            }
            //   addDeposit(amount: number) {
            //     this._balance += amount;
            //   }
            set deposit(amount) {
                this._balance += amount;
            }
            //   getBalance() {
            //     return this._balance;
            //   }
            get balance() {
                return this._balance;
            }
        }
        const goribManusherAccount = new BankAccount(111, "Mr. Goribs", 29);
        goribManusherAccount.deposit = 50;
        console.log(goribManusherAccount);
        console.log(goribManusherAccount.balance);
    }
}
