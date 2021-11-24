const myATM = {
    accountNumber: 12345678,
    PIN: 1234,
    accountBalance: 123.45,
    withdrawCash(account,userPIN,amount) {
        if ((account != this.accountNumber) || (userPIN != this.PIN)){
            console.log(account + " " + userPIN);
            console.log(this.accountNumber + " " + this.PIN);
            console.log("Incorrect account number or PIN");
        } else if ((account == this.accountNumber) && (userPIN == this.PIN) && (amount > this.accountBalance)){
            console.log("insufficient funds");
        }
            else if ((account == this.accountNumber) && (userPIN == this.PIN) && (amount <= this.accountBalance)){
                this.accountBalance = this.accountBalance - amount;
                console.log (`Please take your cash. Your new balance is ${this.accountBalance}`);
            }
        }

    }


//let inputAccount = prompt ("enter your account number");
//let inputPIN = prompt("enter your PIN");
//let inputAmmount = prompt("enter amount to withdraw");

console.log(myATM.accountNumber);
console.log(myATM.PIN);
console.log(myATM.accountBalance);

let inputAccount = 12345678;
let inputPIN = 1234;
let inputAmount = 200;


myATM.withdrawCash(inputAccount,inputPIN,inputAmount);
