
// Ask user to input number
process.stdout.write("Please enter a number: ");
 // Read user input
process.stdin.on ("data", function (inputFromUser) {
    let number = Number (inputFromUser);
     

     // if user ebtered zero
     if (number == 0) {
        // print out 
        process.stdout.write("You entered a zero. ");
    } else {
        // if user didn't enter zero
        //print out
        process.stdout.write("You entered something else what I expected. ");
     
    }
    // Exit process
    process.exit()
});



