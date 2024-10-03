
process.stdout.write(`Please select what you want to do: 
    1 - Print out hello 
    2 - Print out current date & time 
    0 - End program  
    \n`);

let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

process.stdin.on("data",function(inputFromUser) {

let option = inputFromUser.toString().trim();

switch(option) {
    case "1":
        process.stdout.write("Hello! \n");
        break;
    case "2":
        process.stdout.write("Current date and time is " + formattedDateTime + "\n");
        break;
    case "0":
        process.stdout.write("Exiting program \n");
        process.exit();
        break;
    default:
            process.stdout.write(`Please choose from given options: 
        1 - Print out hello 
        2 - Print out current date & time 
        0 - End program \n`);
   
                             
}

})
