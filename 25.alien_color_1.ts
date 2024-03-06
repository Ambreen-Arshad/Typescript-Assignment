// Date 4-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 25 in typescript assignment.

// Alien Colors #1: Imagine an alien was just shot down in a game. \n
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

//  create a variable called alien_color 
let alien_color : string = 'green';

// • Write an if statement to test whether the alien’s color is green. \n
// If it is, print a message that the player just earned 5 points.

if(alien_color === 'green') {
    console.log("Player just earned 5 points !");
}

// • Write one version of this program that passes the if test and another that fails. 
alien_color ='Yellow';

// (The version that fails will have no output.)
if(alien_color === 'green') {
    console.log("Player just earned 5 points !");
}