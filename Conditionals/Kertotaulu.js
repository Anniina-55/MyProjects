
const util = require("util"); // Import the util module for util.format

process.stdout.write("This is a program for multiplication tables. Please enter a number: ");
process.stdin.on("data", function(inputFromUser) {
    let number = Number (inputFromUser.toString().trim());
    process.stdout.write("Multiplication table for " + number + ":\n");
    // Define column widths
    const numberWidth = 3;   
    const factorWidth = 3;    
    const resultWidth = 4;

    for (let factor = 1; factor <= 10; factor++) {
        let formattedOutput = util.format
        ("%d x %d = %d", String(number).padStart(numberWidth),
                         String(factor).padStart(factorWidth),
                         String(number * factor).padStart(resultWidth));
                         
        let paddedOutput = formattedOutput

        process.stdout.write(paddedOutput + "\n");
    } 
    
    process.exit();
})






