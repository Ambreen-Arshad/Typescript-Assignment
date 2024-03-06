// Date 5-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 27 in typescript assignment.

// Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor : string = 'green';

//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.

// version 1 of the program

if(alienColor ==="green"){
console.log("Version 1: The player earned 5 points");
}
else if (alienColor ==="Yellow") {
console.log("the player earned 10 points.");
}
else if(alienColor ==="Red"){
console.log("the player earned 15 points.");
}
else {
console.log("Please select the right color");
}

// version 2 of the program
alienColor = "Yellow";

if(alienColor ==="green"){
console.log("the player earned 5 points");
}
else if (alienColor ==="Yellow") {
console.log("Version 2: The player earned 10 points.");
}
else if(alienColor ==="Red"){
console.log("the player earned 15 points.");
}
else {
console.log("Please select the right color");
}

// version 3 of the program
alienColor = "Red";

if(alienColor ==="green"){
console.log("the player earned 5 points");
}
else if (alienColor ==="Yellow") {
console.log("the player earned 10 points.");
}
else if(alienColor ==="Red"){
console.log("Version 3: The player earned 15 points.");
}
else {
console.log("Please select the right color");
}    

