// Date : 18-2-2024
// This is Ambreen,and you are watching the solution of the problems in Typescript:


// Changing Guest List: You just heard that one of your guests can’t make the dinner,\n
// so you need to send out a new set of invitations. \n
//You’ll have to think of someone else to invite

let Guest_list : string[] = ['Quaid-e-Azam','Alama_Iqbal','Sir_Syed_Ahamad_Khan',]; 

for (let i = 0; i < Guest_list .length; i++) {

    console.log ('Dear Mr. ' +Guest_list [i] + `,\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n`)
}

let absent_Guest : string = 'Quaid-e-Azam' ;
let new_Guest : string = 'Imran_Khan';
Guest_list[0] = new_Guest;

for(let i=0; i<Guest_list.length; i ++){
    console.log ('Dear Mr. ' +Guest_list [i] + `,\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n`)
    }
    console.log(`Mr.${ absent_Guest } is not comming to the party.`)


