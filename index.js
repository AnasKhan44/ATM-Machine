#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBal = 10000;
let myPin = 1234;
const ATM = await inquirer.prompt([{ message: "****************** Enter Your Pin ******************\n", type: 'number', name: 'pin' }]);
if (ATM.pin === myPin) {
    console.log(chalk.bold(`${chalk.cyan(`\n  ****************** Success! ******************\n`)}`));
    let operation = await inquirer.prompt([{ message: chalk.yellow("****************** Select Operation ******************\n"), type: "list", name: "oper", choices: ["Deposit", "Withdrawal", "Fastcash"] }]);
    if (operation.oper === "Withdrawal") {
        console.log("\n");
        let amount = await inquirer.prompt({ message: chalk.green(`****************** Enter Amount: ******************\n`), type: 'number', name: 'sum' });
        if (myBal - amount.sum < 0) {
            console.log(chalk.red(chalk.bold(`****************** Insufficient Funds ******************`)));
            process.exit();
        }
        else {
            let bal = myBal - amount.sum;
            console.log(`Current Bal: ${bal}`);
        }
    }
    else if (operation.oper === "Fastcash") {
        console.log("\n");
        let fastOp = await inquirer.prompt({ message: chalk.green("****************** Options ******************"), type: "list", choices: ["1000", '2000', '5000', '10000'], name: "choices" });
        console.log(`Current Bal: ${myBal - fastOp.choices}`);
    }
    else {
        console.log("\n");
        let amount = await inquirer.prompt({ message: chalk.green(`****************** Enter Amount ******************\n`), type: 'number', name: 'sum' });
        myBal += amount.sum;
        console.log(`Current Bal: ${myBal}`);
    }
}
else {
    console.log(chalk.bold("\n******************Wrong Pin Entered******************"));
}
