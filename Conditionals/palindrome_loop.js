

process.stdout.write("This program tells whether your word/sentence is a palindrome or not.\nPlease enter your input: ");
process.stdin.on("data", function(inputFromUser) {
    
let userInput = inputFromUser.toString().trim().toUpperCase().replace(/ /g,''); 
let palindrome = true; // assumption that the input is a palindrome which later is checked to be true or not
let printInput = inputFromUser.toString().trim()

    for (index = 0; index < userInput.length; index++) { // loop compares the characters from both ends and length-property counts the number of characters
        if (userInput[index] !== userInput [userInput.length - 1 - index]) { // checks if the character at the current index is not equal to the character from the end
            palindrome = false; // if characters don't match, then
            break; // no need to continue the loop 
        } 
    } if (palindrome) {
        process.stdout.write("'" + printInput + "'" + " is a palindrome.\n");
       } else {
        process.stdout.write("'"+ printInput + "'" + " is not a palindrome.\n");
        } 
    
    process.exit(); 
});


        
        
