"use strict";
{
    class BankAccount {
        // protected _balance: number;
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance += amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    //   class StudentAccount extends BankAccount{
    //     test(){
    //       this._balance
    //     }
    //   }
    const goribManusherAccount = new BankAccount(111, "Mr. Goribs", 29);
    goribManusherAccount.addDeposit(50);
    console.log(goribManusherAccount);
    console.log(goribManusherAccount.getBalance());
}
