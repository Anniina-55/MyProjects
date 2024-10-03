

process.stdout.write("This program prints out your name, please enter your name: ");
process.stdin.on("data", function(inputFromUser) {
    let counter = 0;
// do - while structure checks the condition after 
    do {
        process.stdout.write(inputFromUser);
        counter++;
    } while (counter < 5);
    
    
    process.exit();

});
