process.stdout.write("\nIt's the final countdown! There's 10 seconds 'till rocket launch: \n");
let countdown = 10;

do {process.stdout.write("..." + countdown + "...\n");
    countdown--;
   } while (countdown >= 0);

 process.stdout.write("Lift off! \nBon Voyage!\n");


process.stdout.write("\nThere's 10 seconds 'till midnight: \n");
let countdown2 = 10

while (countdown2 >= 0) 
    {process.stdout.write("..." + countdown2 + "...\n");
    countdown2--;
    }
process.stdout.write("Happy New Year!!!\n");


process.stdout.write("\nVoting ends in 10 seconds! Let's count together: \n");


for (let counter = 10; counter >= 0; counter--) {
    process.stdout.write("... " + counter + "... ");
    }

    process.stdout.write("And the voting is now closed!");


process.stdout.write("\n\nPlease enter the day of the week: ");
process.stdin.on("data", function(inputFromUser) {    
let day = inputFromUser;

switch (day) {
case "Monday":
    console.log("It's a start of the work week.");
    break;
case "Wednesday":
    console.log("It's the middle of the week.");
    break;
case "Friday":
    console.log("It's the end of the work week.");
    break;
default:
    console.log("It's a regular day.");
    }
process.exit();
});


