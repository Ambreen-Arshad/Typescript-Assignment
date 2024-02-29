// Date : 18-2-2024
// This is Ambreen,and you are watching the solution of the problems in Typescript:


// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



let Guest_list : string[] = ['Quaid-e-Azam','Alama_Iqbal','Sir_Syed_Ahamad_Khan',]; 

// for (let i = 0; i < Guest_list .length; i++) {

//     console.log ('Dear Mr. ' +Guest_list [i] + `,\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n`)
// }

let absent_Guest : string = 'Quaid-e-Azam' ;
let new_Guest : string = 'Imran_Khan';
Guest_list[0] = new_Guest;

for(let i=0; i<Guest_list.length; i ++){
    console.log ('Dear Mr. ' +Guest_list [i] + `,\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n`)
    }
    console.log(`Mr.${ absent_Guest } is not comming to the party.`);  

    console.log('Good News! We find Big Table so we are inviting 3 more guest.')

    Guest_list.unshift('Asif_Ali_Zardari');
    Guest_list.splice(2,0,'Nawaz_Sharif');
    Guest_list.push('Bilawal_Bhutto_Zardari');

    for(let i=0; i<Guest_list.length; i ++){
        console.log ('Dear Mr. ' +Guest_list [i] + `,\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n`)
        }




