
const readline = require("readline");
 const rl = readline.createInterface ({
        input:process.stdin,
        output: process.stdout
 });
 // ask the user to enter number in meters
rl.question("Please enter the distance in meters: ", (userInput) => {
    let metersToNumber = Number (userInput);
    let yards = metersToNumber * 1.0936133;
    let feet = metersToNumber * 3.2808399;
    let inches = metersToNumber * 39.3700787;
    let lightYears = metersToNumber * (1.05702341 * 10**16);

console.log("Distance in yards: " + yards + "\n" +
    "Distance in feet: " + feet + "\n"+
    "Distance in inches: " + inches + "\n" +
    "Distance in lightYears: " + lightYears + "\n"); 
   rl.close()

}); 
