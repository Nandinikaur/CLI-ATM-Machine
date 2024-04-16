#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 3333;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "please enter your 4 digit pin:",
        type: "number"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select any option:",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount:",
                type: "number"
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Your Balance is: " + myBalance);
            console.log("Insufficient Balance!");
        } //homework#1: (user select an amount more than their balance show a msg{insufficient balance})
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
            console.log("WITHDRAW SUCCESSFULLY!!!");
        }
    }
    //homework#2: (add fast cash option)
    else if (operationAns.operation === "fast cash") {
        let cashAns = await inquirer.prompt([
            {
                name: "cash",
                message: "please select your cash:",
                type: "list",
                choices: ["500", "1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000"]
            },
        ]);
        myBalance -= cashAns.cash;
        console.log(`You Have Successfully Withdrawal:  ${cashAns.cash} \n Your remaining balance is:   ${myBalance}`);
    }
    //homework#3: (code "check balance" option in TEMPLATE LITERALS)
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is:  ${myBalance}`);
    }
}
else {
    console.log("incorrect pin code...");
}
