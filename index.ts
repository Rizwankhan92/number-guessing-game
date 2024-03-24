#! /usr/bin/env node

import inquire from "inquirer";
import chalk from "chalk";
let randomnumber = Math.floor(Math.random() * 10 + 1);

let answer = await inquire.prompt([
  {
    name: "guesnumber",
    type: "number",
    message: "Please Guess a Number :",
  },
]);
if (answer.guesnumber === randomnumber) {
  console.log(chalk.green.bold`Congratulations You are right number guess`);
} else {
  console.log(
    chalk.red
      .bold`You Guess a Wrong Number & The Computer Generated Number is  `,
    chalk.red.bold
    `${randomnumber}`
  );
}
