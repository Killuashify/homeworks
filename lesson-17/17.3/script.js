class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("The deposit amount must be greater than 0.");
      return;
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("The amount to withdraw must be greater than 0.");
      return;
    }

    if (amount > this.balance) {
      console.log("There are not enough funds in the account.");
      return;
    }

    this.balance -= amount;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); //1000

account1.deposit(500);
console.log(account1.getBalance()); //1500

account1.deposit(0);
console.log(account1.getBalance()); //The deposit amount must be greater than 0.

account1.withdraw(200);
console.log(account1.getBalance()); //1300

account1.withdraw(0);
console.log(account1.getBalance()); //The amount to withdraw must be greater than 0.

account1.withdraw(2000);
console.log(account1.getBalance()); //There are not enough funds in the account.
