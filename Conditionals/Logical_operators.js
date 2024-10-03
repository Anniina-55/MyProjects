
let waitingForInput = true;

process.stdout.write("Please enter three numbers. Separate the numbers with space: ");
process.stdin.on("data", function (inputFromUser) {
    if (waitingForInput) {
        let userInput = inputFromUser.toString().trim().split(" ");
        let number1 = Number (userInput[0]);
        let number2 = Number (userInput[1]);
        let number3 = Number (userInput[2]);

        if (number1 == number2 && number2 == number3) {
            process.stdout.write("You entered three matching numbers! \n")
            waitingForInput = false
            process.stdin.end();
        } 

        if (number1 != number2 && number2 != number3) {
            process.stdout.write("You entered three different numbers. Please try again. \n ")
            waitingForInput = true
            process.stdin.end();
        }

        if (number1 == number2 && number2 != number3) {
            process.stdout.write("The third number doesn't match. Please try again. \n")
            waitingForInput = true
            process.stdin.end()
        }

        if (number1 == 2 || number2 == 2 || number3 == 2) {
            process.stdout.write("You entered the magic number 2!\n")
            waitingForInput = true
            process.stdin.end()
        }

        if (userInput != Number) {
            process.stdout.write("You entered invalid input, please enter three numbers. \n")
            waitingForInput = true
            process.stdin.end()
        }
    } 

})
