let age =27;
console.log (age) 
var age2 =25
console.log (age2)




process.stdout.write("Please give a number: ");
process.stdin.on("data", function (inputFromUser) {
    
    let givenInput = Number (inputFromUser);
    let secretNumber = givenInput + 7;

process.stdout.write("Your number is: "  + givenInput + ".\n"); 
    process.stdout.write("My number is: " + secretNumber + ".\n");  
    process.stdout.write("Sorry, you lose. Game over! \n");

    process.exit();

});

