import inquirer from "inquirer";
let paragraph = await inquirer.prompt({
    name: "Para",
    type: "input",
    message: "Please enter your paragraph: "
});
let para = paragraph.Para;
let wordCount = 0;
for (let i = 0; i < para.length; i++) {
    if (para[i] != " ") {
        wordCount++;
    }
    else {
        wordCount = wordCount;
    }
}
console.log(wordCount);
