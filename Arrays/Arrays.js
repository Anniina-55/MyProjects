
let jumpResults = [2.574, 2.753, 3.029, 3.036, 3.123].map(jumpResults=>jumpResults.toFixed(2)).join(", ");
process.stdout.write(jumpResults);

let numberArray = [2,7,10,5,8];
for (let i = 0; i < numberArray.length; i++) {
    process.stdout.write("\n\nValue in index " + i + ": " + numberArray[i]);
    }

let fruits = ["banana","apple","kiwi","orange"];
fruits.unshift("grapefruit");
process.stdout.write("\n\nFirst item in the array is " + fruits[0] + "\n");

let fruits2 = ["banana", "apple","kiwi","orange"];
for (let i = fruits2.length - 1; i >= 0; i--) {
    // prints each fruit in reverse order, adding a comma only if it’s not the last item
    process.stdout.write(fruits2[i] + (i !== 0 ? ", " : "")); 
    // ternary operator is a shorthand way of writing if-else statement
    // syntax for ternary operator: condition ? expressionTrue : expressionFalse 
    
} 

let berries = ["strawberry", "blueberry", "cloudberry", "cranberry", "lingonberry", "raspberry", "rowan berry"];
berries.pop();
berries.shift();
berries.sort();
process.stdout.write("\n\nLet's print out the berries list in alphabetic order!\n");

for (let index = 0; index < berries.length; index++) {
    process.stdout.write(berries[index] + (index !== berries.length - 1 ? ", ": ""));
    
}

let jumpCompetition = [
    {name: "Lando", jumps: [2.55, "x", "x"]}, 
    {name: "Lewis", jumps: [2.55, 2.60, "x"]},
    {name: "Max", jumps:[2.55, 2.60, "x"]},
    {name: "Carlos", jumps: [2.55, 2.60, 2.65]}
    ];

    process.stdout.write("\n\nResults of the highjump competition are following:\n");

    for (let i = 0; i < jumpCompetition.length; i++) {
        // Filter out invalid jumps ("x") with .filter(jump => typeof jump === "number")
        let formattedJumps = jumpCompetition[i].jumps.map(jump => typeof jump === "number" ? jump.toFixed(2) : jump).join(", ");
    process.stdout.write(jumpCompetition[i].name + ": " + formattedJumps + "\n");
    }

let longestJump = 0;
let winner = "";

    for (let i = 0; i < jumpCompetition.length; i++) {
        // Find the best jump per participant with Math.max() 
            let bestJump = Math.max(...jumpCompetition[i].jumps.filter(jump => typeof jump === "number"));
            // Compare best jumps
            if (bestJump > longestJump) {
            longestJump = bestJump;
            winner = jumpCompetition[i].name;
            }
    }
process.stdout.write("\n" + winner + " has the highest jump: " + longestJump.toFixed(2) + " meters!\n");

let array = [4, 5, 4, 7, 5, 7, 5, 3, 4 ];
if (array.length > 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array [i];
        }

    let average = sum / array.length;
    console.log("\nAverage number of the array [" + array.join(", ") + "] is: " + average.toFixed(2));
}   else {
    console.log("Array is empty");
    }

    
process.stdout.write("\nHello World! \nTomorrow starts October");

process.stdout.write("\nThis program calculates the average of the numbers you input, until you enter a letter.\nPlease, enter number: ");
const numbers = []; // create a variable as an array to store the user inputs
process.stdin.on("data", function(inputFromUser) {
    let userInput = inputFromUser.toString().trim();
    // check if the input is a number or not
    if (!isNaN(userInput) && userInput !== "") {
        let number = Number (userInput); // convert user input to number
        numbers.push(number); // store the number to the array
        process.stdout.write("Enter another number (or enter a letter to stop): "); // tell user to keep going
    } else { // calculate sum and then average
        if (numbers.length > 0) {
        let sum = numbers.reduce((acc, curr) => acc + curr, 0);
        let average = sum / numbers.length
            process.stdout.write("The average is: " + average.toFixed(2));
        }
        if (userInput.trim() === "" || isNaN(userInput)) {
            process.stdout.write("You didn't enter a number.");
        } else {
            process.stdout.write("\nNo valid numbers were entered.\n");
            }
        process.stdin.pause();
    } 
    
});




