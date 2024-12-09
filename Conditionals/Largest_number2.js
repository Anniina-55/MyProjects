
// Ask the user to input three numbers
process.stdout.write("Please enter three numbers, press space to separate them: ");
process.stdin.on("data", function (inputFromUser) {
    let inputs = inputFromUser.toString().trim().split(' ');
    let number1 = Number(inputs[0]); 
    let number2 = Number(inputs[1]);
    let number3 = Number(inputs[2]);

    // Initialize the largest number with the first one
    let largest = number1;

    // Compare number2 and number3 to find the largest
    if (number2 > largest) {
        largest = number2;
    }
    if (number3 > largest) {
        largest = number3;
    }

    // Output the largest number
    process.stdout.write("The largest number is " + largest + ".\n");

    process.exit();
});


