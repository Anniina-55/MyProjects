
process.stdout.write("Please enter a string, and I will reverse it: ");
process.stdin.on("data", function(inputFromUser) {
let userInput = inputFromUser.toString().trim(); 
let reversed = ""; // a string
    
// Use a for loop to construct the reversed string
for (let i = userInput.length - 1; i >= 0; i--) { // lenght is substracked by 1 since it compare the character from the end, moving backwards through the string. loop continues as long as index is greater than or equal to 0 (first character)
    reversed += userInput[i]; // nykyinen merkki (eli userInput[i]) lisätään reversed-muuttujaan. Käytännössä tämä rakentaa merkkijonon takaperin yksi merkki kerrallaan lisäämällä jokaisen merkin reversed-muuttujaan
}
    process.stdout.write(userInput + " in backwards is: " + reversed + ".");


process.exit();


});
