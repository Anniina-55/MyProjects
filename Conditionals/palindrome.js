
process.stdout.write("This program tells wheter your word/sentence is a palindrome or not.\nPlease enter your input: ");
process.stdin.on("data", function(inputFromUser) {

let userInput = inputFromUser.toString().trim().toUpperCase().replace(/ /g,'');
let reversedInput = userInput.split('').reverse().join('');
let originalWithSpaces = inputFromUser.toString().trim();

if (userInput === reversedInput) {
    
    process.stdout.write(originalWithSpaces + " is a palindrome.");
    } else { 
        process.stdout.write(originalWithSpaces + " is not a palindrome. ");
        }
    
process.exit();
   
});