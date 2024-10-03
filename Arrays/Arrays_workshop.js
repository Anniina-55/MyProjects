
let matrix = new Array();
for(let i = 0; i < 4; i ++) {
matrix[i] = new Array(55, 65);
console.log(matrix[i]);
};


let jumpCompetition = [
    {name: "Lando", jumps: [2.55, "x", "x"]}, 
    {name: "Lewis", jumps: [2.55, 2.60, "x"]},
    {name: "Max", jumps:[2.55, 2.60, "x"]},
    {name: "Carlos", jumps: [2.55, 2.60, 2.65]}
];

process.stdout.write("\n\nResults of the high jump competition are following:\n");

// Print the results of each participant
for (let i = 0; i < jumpCompetition.length; i++) {
    process.stdout.write(jumpCompetition[i].name + ": ");
    // Use forEach to print each jump
    jumpCompetition[i].jumps.forEach(function (jump) {
        process.stdout.write(jump + ", ");
    });
    process.stdout.write("\n"); // New line after each participant
}

// Find the participant with the longest jump
let longestJump = 0;
let winner = "";

// Iterate over the participants to find the highest jump
for (let i = 0; i < jumpCompetition.length; i++) {
    // Find the best jump per participant, ignoring "x" values
    let bestJump = Math.max(...jumpCompetition[i].jumps.filter(jump => typeof jump === "number"));
    
    // Compare best jumps and track the winner
    if (bestJump > longestJump) {
        longestJump = bestJump;
        winner = jumpCompetition[i].name;
    }
}

// Print the winner
process.stdout.write("\n" + winner + " has the highest jump: " + longestJump.toFixed(2) + " meters!\n");



let intArray = [5, 7, 32, 31, 8];
let doubleArray = [12.4, -13.55, 67.44];
let stringArray = ["Helsinki", "Lissabon", "New York", "Shanghai"];

process.stdout.write("Value in the index number 3 is: " + stringArray[3] + "\n");
process.stdout.write("The fourth item in the integer array is: " + intArray[4] + "\n");
process.stdout.write("In the double array there are " +  doubleArray.length + " items, where " + doubleArray.length + " is the size of the array.\n");
process.stdout.write("In the string array there are " +  stringArray.length + " items, where " + stringArray.length + " is the size of the array.\n");

for (i = 0 ; i < intArray.length; i++) {
    process.stdout.write(intArray[i].toString());
    if (i < intArray.length - 1) {
        process.stdout.write(", "); 
    }
    }
process.stdout.write("\n");
process.stdout.write(doubleArray.reverse().join(", ").toString());
process.stdout.write("\n");

for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = "empty"; // Set each element to "empty"
}
process.stdout.write(stringArray.join(", ") + "\n");


// Workshop 4.2 Task 2: Reverse

process.stdout.write("This program reads numbers from keyboard. After receiving zero, it prints out the numbers in reverse order. Please, start entering numbers and press enter: ");
const numbers = [];

process.stdin.on("data", function (inputFromUser) {
    // Split input and convert to an array of numbers
    const inputNumbers = inputFromUser.toString().trim().split(" ").map(Number);

    for (let number of inputNumbers) {
        if (number === 0) {
            // Print numbers in reverse order when the user inputs zero
            process.stdout.write("Numbers in reverse order: ");
            for (let i = numbers.length - 1; i >= 0; i--) {
                process.stdout.write(numbers[i].toString());
                if (i > 0) {
                    process.stdout.write(", "); // Add a comma for separation
                }
            }
            process.stdout.write(". Program stops.\n");
            process.stdin.pause(); // Stop reading input
            return; // Exit the function after processing zero
        } else if (!isNaN(number)) { // Check if the number is valid
            // Add the number to the array
            numbers.push(number);
        }
    }

    process.stdout.write("Enter more numbers (or 0 to stop): ");
});

    




