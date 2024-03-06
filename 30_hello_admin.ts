// Date 6-3-2024
// This is "Ambreen"and you are watching the solution of the problem no 30 in typescript assignment.

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. \n
//Imagine you are writing code that will print a greeting to each user after they log in to a website. \n
//Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


const  userNames : string[] = ['admin','alisha','saim','alishba','sarim'];

for(let i=0; i<userNames.length; i++){

if(userNames [i]==='admin')
{

    console.log("Hello admin, would you like to see a status report?");
}

else{
    console.log(` Hello ${userNames[i]}, thank you for logging in again.`)
}
}
