
process.stdout.write("This program can tell you if a number is even or odd. Please enter a number: ");
process.stdin.on("data", function (inputFromUser) {
    let userInput = Number (inputFromUser);

    if (userInput % 2 == 0 ) {
        process.stdout.write("The number " + userInput + " is even."); 
    } 
    else 
    {
        process.stdout.write("The number " + userInput + " isn't even number.")
         
    
    }
        process.exit();

});
