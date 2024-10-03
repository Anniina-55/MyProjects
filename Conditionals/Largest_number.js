
// Create a simple program in which the user is asked to give two numbers and then your program prints out which one of them is largest

process.stdout.write("Please enter three numbers, press space to separate them: ");
process.stdin.on("data", function (inputFromUser) {
    let inputs = inputFromUser.toString().split(" ");
    let number1= Number (inputs [0]); 
    let number2= Number (inputs [1]);
    let number3 = Number (inputs [2]);

    // compare the numbers
    if (number1 > number2)
        if (number1 > number3) {
        process.stdout.write ("The largest number is " + number1 + ".\n");
        }  
        else {
            process.stdout.write("The largest number is " + number3 + ".\n");
            }
    if (number2 > number1) 
        if (number2 > number3) {
            process.stdout.write("The largest number is " + number2 + ".\n");
        }
        else {
            process.stdout.write("The largest number is " + number3 + ".\n");
        }
    
    
    
    process.exit();
});


