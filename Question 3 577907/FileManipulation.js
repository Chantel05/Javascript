//Belgium Campus ITversity has requested you to write a program that will write a welcome 
//message and read the welcome message to new students, the welcome message should be as 
//follows (“Welcome to Belgium Campus ITversity we are happy you chose us!!!” NB: use fs.

const fs = require('fs');

// Write a welcome message to a file
fs.writeFileSync('welcome.txt', 'Welcome to Belgium Campus ITversity we are happy you chose us!!!');

// Write a welcome message to a file using append.
//fs.appendFileSync('welcome.txt', 'Welcome to Belgium Campus ITversity we are happy you chose us!!!\n');


// Read the welcome message from the file
const welcomeMessage = fs.readFileSync('welcome.txt', 'utf8');
console.log(welcomeMessage);




