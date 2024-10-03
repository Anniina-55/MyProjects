
process.stdout.write("Let's create a triangle! Choose the height: ");

// Read input from the user
process.stdin.on("data", function (inputFromUser) {
    let userInput = inputFromUser.toString().trim(); // inputFromUser buffer is converted to a string
    let height = Number (userInput); // convert userInput to number

    // Loop through levels of the triangle: outer loop i iterates from 1 to height where each iteration represents a row of the triangle
    for (let i = 1; i <= height; i++) {
        let row = "";

    // Create the row with stars: The inner loop j includes stars * to the row string, and number of stars vastaa nykyistä rivinroa (verrataan indexiin i)
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
        // Print the rows
        process.stdout.write(row + "\n");
    }

    process.exit();
});
