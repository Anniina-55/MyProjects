
process.stdout.write("This program prints out your name 5 times, please enter your name: ");
process.stdin.on("data", function(inputFromUser) {
    let counter = 0;

    while(counter < 5) {
        process.stdout.write(inputFromUser);
        counter++;
    }
    
    
    process.exit();

});





