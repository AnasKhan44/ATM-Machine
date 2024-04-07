#! /usr/bin/env node
import inquirer from "inquirer";
let myBal = 10000;
let myPin = 5131;
const ATM = await inquirer.prompt([{ message: "Enter Your Pin: ", type: 'number', name: 'pin' }]);
if (ATM.pin === myPin) {
    console.log(`Success!`);
    let operation = await inquirer.prompt([{ message: "Select Operation", type: "list", name: "oper", choices: ["Deposit", "Withdrawal", "Fastcash"] }]);
    if (operation.oper === "Withdrawal") {
        let amount = await inquirer.prompt({ message: `Enter Amount: `, type: 'number', name: 'sum' });
        if (myBal - amount.sum < 0) {
            console.log('Insufficient Funds');
            process.exit();
        }
        else {
            let bal = myBal - amount.sum;
            console.log(`Current Bal: ${bal}`);
        }
    }
    else if (operation.oper === "Fastcash") {
        let fastOp = await inquirer.prompt({ message: "Options: ", type: "list", choices: ["1000", '2000', '5000', '10000'], name: "choices" });
        console.log(`Current Bal: ${myBal - fastOp.choices}`);
    }
    else {
        let amount = await inquirer.prompt({ message: `Enter Amount: `, type: 'number', name: 'sum' });
        myBal += amount.sum;
        console.log(`Current Bal: ${myBal}`);
    }
}
else {
    console.log("Wrong Pin Entered");
}
