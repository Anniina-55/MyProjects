process.stdout.write("\nLet's print out some numbers! \n");

for (let number = 0; number <= 10; number++) {
    process.stdout.write("\n" + number);
}

// For-loop is a versatile control flow statement used to repeat a block of code a specific number of times. It's particularly useful when you know in advance how many times you want to execute a block of code

process.stdout.write("\n\nLet's print out some numbers! \n");

for (let number = 10; number >= 0; number--) {
    process.stdout.write(number + "\n");
}



for (let number = 0; number < 10; number++) {
    for(let num = 0; num < 10; num++) {
    process.stdout.write("(" + number + "." + num + ")");
    
    }
process.stdout.write("\n");
}

process.stdout.write("\nLet's print numbers from 0 - 20!\n"); 

    for (let number = 0; number <= 20; number++) {
        process.stdout.write("\n" + number);
    }


process.stdout.write("\n\nAnd now let's print the numbers other way round!\n");
    for (let number = 20; number >= 0; number--) {
        process.stdout.write("\n" + number);
    }

    process.stdout.write("\n\nOne more practise. Let's print out numbers from -5 to 5: ");
        for (let number = -5; number <= 5; number++) {
            process.stdout.write("\n" + number);
        }

process.stdout.write("\n\nLet's see if you are eligible to vote or not. Please, Enter your age: ")
process.stdin.on("data", function(inputFromUser) {
    // Ternary operator is a shorthand way of writing if-else statement with only 2 outcomes
    let age = inputFromUser;
    let canVote = age >= 18 ? "Yes, you can vote." : "No, you're too young to vote.";
    console.log(canVote); 
        
})