// Date 6-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 31 in typescript assignment.

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let userNames : string[] = ['admin','arshad','saim','sarim','umar'];

if(userNames.length===0){
    console.log("We need to find some users!");
}
else{
    userNames = [];
    console.log('All users Name have been removed. '+ userNames.length);
}