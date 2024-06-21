class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  // constructor function for initialize variables for first time and it always return instance of class
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  // method
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    }
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value <= 0) {
      throw new Error("");
    }
    this._balance = value;
  }
}

// create object
const account = new Account(1, "arpit", 10);
console.log(account.balance);
