process.stdout.write("Hello World!\n")
/* Create a program that finds specific items in an array.
1. Create an array with the following items: 55, 23,
6456, 324, 21, 234, 72, 21
2. Ask the user what they want to search for in the
integer array.
3. Loop through the array and compare the values with the input given by the user.
4. If the item is found, print out in which index the value was found.
5. If the item is not found, print out a message saying item was not found.*/

let matrix = [
    ["a", "b", "c"],
    ["d", "e", "f"]
];

// Function to print the matrix
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" | ")); // Join elements of each row with " | "
    }
}
printMatrix(matrix);



let numArray = [55, 23, 6456, 324, 21, 234, 72, 21]; // create array variable for the numbers
process.stdout.write("Tell me which item you want to search from the array " + "[" + numArray.join(", ").toString() + "] :\n"); // ask the user to give input
process.stdin.on("data", function(inputFromUser) {
    let userInput = parseInt(inputFromUser.toString().trim(), 10); // convert input into integer, 10 = base decimal(our standard number system)
    let foundIndexes = []; // if there's multiple results for certain value (in this case 21)

    for (i = 0; i < numArray.length; i ++) { // Loop through the array from index 0 to the last index
        // Check if the current element in numArray (at index i) is equal to the user's input
        if (numArray[i] === userInput) { // if a match is found, then add that to foundIndexes array to store multiple values
            foundIndexes.push(i);
            }
        }

        if (foundIndexes.length > 0) { // If the number was found, print all the indexes with .join property
            process.stdout.write("The number you'd like to search (" + userInput + ") was found at index(es) " + foundIndexes.join(" and ") + ".\n");

         } else { // if no match was found --> print out that the number was not found
            process.stdout.write("The number you'd like to search (" + userInput + ") was not found.");
        }
        

})

