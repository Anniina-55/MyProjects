let x = 10, y = 20, z = 15;
x + y; // 30
y - x; // 10
x * y; // 200
y / x; // 2
x % 2; // 0
x++; // 11
x--; // 10
let result;
result = x + y;
console.log("x = " + x + ", y = " + y + ", z= " + z + ", result = " + result); 
result = y - x

let x2 = 5; // if you don't wany to create new variables just don't write the "let" and it will use the ones you already assigned
let y2 = "5";
let z2 = 3;
x2 + y2; // 55
x2 + z2; // 8
y2 + z2; // 53
x2 + y2 + z2; // 553
x2 + z2 + y2; // 85
x2 + x2 + z2; // 13
console.log(x2 + y2, x2 + z2, y2 + z2, x2 + y2 + z2, x2 + z2 + y2, x2 + x2 + z2);

process.stdout.write("Hello world!" ) ; /* This is a multi line comment */
process.stdout.write("Hello \nworld!"); // This is a comment
process.stdout.write("Hello september!");
process.stdout.write("55")
process.stdout.write(x.toString(55));

process.stdin.on( "data", function( inputFromUser )
{
// The statements below will be executed automatically after
// the user has typed in something. 
let givenInput = inputFromUser;
process.exit() ;
}) ;




