// Write a simple program that asks user a simple yes or no question and prints out a corresponding message. Remember to also handle invalid input.

let waitingForInput = true;

process.stdout.write("Are you younger than 18 years old? Please, answer Yes or No: ");
process.stdin.on("data", function (inputFromUser) {
    if (waitingForInput) {

        let userInput = inputFromUser.toString().trim().toLowerCase();

        if (userInput === "yes") {
        process.stdout.write("You are a minor.\n")
        waitingForInput = false
        process.stdin.end();
        }
        else if (userInput === "no") {
        process.stdout.write("You are an adult.\n")
        waitingForInput = false
        process.stdin.end();
        }
        else {
        process.stdout.write("You entered an invalid answer. Please, answer Yes or No: ");
        }
    }


}); 



