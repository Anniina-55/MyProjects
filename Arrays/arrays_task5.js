
/* 1. Create a program with an 100 item array that is initialized with random numbers of range 0-1000.
• To create random numbers you can use Math.random () function.
2. Find the largest value in the array using a loop and print it out.
3. Find the smallest value in the array using a loop and print it out. */

// create array variable to store the random numbers
let array100 = [];
// Generate 10 random numbers between 1 and 1000
for (let i = 0; i < 100; i++) {
    array100[i] = Math.floor(Math.random() * 1000);
    
}   let largest = array100[0] // initialize the largest value to be in index 0 of the array100, and then compare
    
for (let i = 1; i < array100.length; i++) { // Start from the second element
    if (array100[i] > largest) {
        largest = array100[i]; // Update largest if a larger number is found
    }
}   process.stdout.write("\nThe array is this:\n[" + array100.join(", ") + "]\n\nIts largest number is " + largest + ".\n");

        // Find the smallest value in the array
    let smallest = array100[0]; // Initialize smallest with the first element
    for (let i = 1; i < array100.length; i++) { // Start from the second element
        if (array100[i] < smallest) {
            smallest = array100[i]; // Update smallest if a smaller number is found
            }
        }
        process.stdout.write("The smallest number of the array is " + smallest + ".\n");

        
let board = [
            [0, 0, 0, 0, 0], // Row 0
            [0, 0, 0, 0, 0], // Row 1
            [0, 0, 0, 0, 0], // Row 2
            [0, 0, 0, 0, 0], // Row 3
            [0, 0, 0, 0, 0]  // Row 4
            ];
let ships = [[1, 2], [3, 3]];

process.stdout.write("\nThis is battleship game. I've placed my ships on the 5x5 board, and your job is to guess where they are. Good luck!\nPlease, enter your x and y coordinates separated by space (e.g. 0 0): ")

process.stdin.on("data", function(inputFromUser) {
    
    for (let i = 0; i < ships.length; i++) {
        let row = ships[i][0]; // Row coordinate of the ship
        let col = ships[i][1]; // Column coordinate of the ship
        board[row][col] = 1; // 1 represents a ship
    }

})

process.stdout.write("Hello World!");
            
  
