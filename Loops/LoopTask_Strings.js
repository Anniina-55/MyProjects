
// Instructions to user
process.stdout.write("Enter a string: ");
// User input
process.stdin.on("data", function(inputFromUser){
    // Trim the input to readable string and remove unwanted spaces
    let userInput =inputFromUser.toString().trim();
    // Define the number of characters 
    process.stdout.write("The length of the string is " + userInput.length + " characters, from which :\n");

    // Start loop by setting the variable character to 0 (index to track each position of the string)
    // Loop continues as long as there's still characters left to process
    // After each loop iteration character variable is incremented by 1, so the loop will check the next character in the string
    
    for (let character = 0; character < userInput.length; character++) {
        process.stdout.write((character+1) + ". character is " + userInput.charAt(character) + "\n");
    }
    // The charAt() method returns the character at the current index character from the userInput string. So, if character is 0, it returns the first letter, if character is 1, it returns the second letter, and so on.
    // charAt()-metodi palauttaa merkin, joka sijaitsee annetussa indeksissä käyttäjän syötemerkkijonossa. Jos indeksi on 0, se palauttaa ensimmäisen kirjaimen jne
process.exit();

})



