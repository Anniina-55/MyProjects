
process.stdout.write("Please enter a string: ");

process.stdin.on("data", function(inputFromUser) {
    // Convert input to a string 
    let userInput = inputFromUser.toString().trim();
    let result = ""; // result is shown as a string

    // Use a for loop to iterate through each character of the string
    for (let i = 0; i < userInput.length; i++) {  
        // length property determines the number of characters in the string
        // Check if the index is odd or even by using modulo
        if (i % 2 === 0) {
            // even indexes (1st, 3rd, 5th ...) converts to lowercase
            result += userInput[i].toLowerCase(); // Concatenate the lowercase of the current character in userInput to result
        } else {
            // odd indexes (2nd, 4th and so on) converts to uppercase letters
            result += userInput[i].toUpperCase();
        }
    }

    // Print the modified string
    process.stdout.write("Your input in mixed case is: " + result + "\n");
    
    // End the process
    process.exit();
});

//+= means concatenation (addition) assignment operator


