/**
 * BankAccount class
 * - properties
 *   - balance (defaults to 0 if not provided)
 *   - accountHolder
 *   - accountNumber
 * - Methods
 *   - deposit(amt) - increases balance by amt
 *   - withDraw(amt) - descreases balance by amt
 */

class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber
    this.accountHolder = accountHolder
    this.balance = balance
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount
      return `You deposited: $${amount}. Your new balance: $${this.balance}`
    } else {
      return `Can't deposit a negative number...`
    }
  }
  withDraw(amount) {
    if (amount > this.balance) {
      return `Sorry, you can't withdraw that much...`
    } else {
      this.balance -= amount
      return `You withdrew $${amount}. New new balance: $${this.balance}`
    }
  }
}

const stevesAccount = new BankAccount("123abs", "anton")

console.log(stevesAccount)
stevesAccount.deposit(200)

console.log(stevesAccount)
console.log(stevesAccount.deposit(150))

console.log(stevesAccount)
console.log(stevesAccount.withDraw(200))

// Exceeding the limits
console.log(stevesAccount.withDraw(200))

// stevesAccount.withDraw(100)
// console.log(stevesAccount)
