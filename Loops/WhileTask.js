

process.stdout.write("Numbers from 0 - 20: \n");
let number = 0;

while (number <= 20) {
  process.stdout.write(number + " ");
  number++; 
}

// The do - while loop guarantees that the code inside the loop will run at least once, regardless of the condition. This is different from the while loop, where the condition is checked before the code inside the loop is executed

process.stdout.write("\nNumbers from 20 - 0: \n");
let number2 = 20
do {
    (process.stdout.write(number2 + " "));
     number2--;
    } while (number2 >= 0); 
