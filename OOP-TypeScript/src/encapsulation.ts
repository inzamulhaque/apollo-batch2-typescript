{
    class BankAccount {
      public readonly id: number;
      public name: string;
      private _balance: number;
      // protected _balance: number;
  
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
      addDeposit(amount: number) {
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
  