// Date : 18-2-2024
// This is Ambreen here,and you are watching the solution of the problem no:17 in Typescript:
// Shrinking Guest List: You just found out that your new dinner table\n
// won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a \n
//message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in \n
//your list. Each time you pop a name from your list, print a message to that \n
//person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, \n
//letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. \n
//Print your list to make sure you actually have an empty list \n
//at the end of your program.

let Guest_list : string[] = ['Quaid-e-Azam','Alama_Iqbal','Sir_Syed_Ahamad_Khan',]; 

// for (let i = 0; i < Guest_list .length; i++) {

//     console.log ('Dear Mr. ' +Guest_list [i] + `,\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n`)
// }

let absent_Guest : string = 'Quaid-e-Azam' ;
let new_Guest : string = 'Imran_Khan';
Guest_list[0] = new_Guest;

// for(let i=0; i<Guest_list.length; i ++){
//     console.log ('Dear Mr. ' +Guest_list [i] + `,\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n`)
//     }
    console.log(`Mr.${ absent_Guest } is not comming to the party.`);  

    console.log('Good News! We find Big Table so we are inviting 3 more guest.')

    // array main 3 Guest add kiye hain.

    Guest_list.unshift('Asif_Ali_Zardari');
    Guest_list.splice(2,0,'Nawaz_Sharif');
    Guest_list.push('Bilawal_Bhutto_Zardari');

    // Yahan per mene 6 Guest ke array ko print karwaya hai. 

    for(let i=0; i<Guest_list.length; i ++){
        console.log ('Dear Mr. ' +Guest_list [i] + `,\n\n It is our pleasure to invite you in our party.\n\n Thank You!\n\n`)
        }

    // Sorry Message to Guest for not inviting.    
    console.log('\n Sorry we can not arrange big table,only Two peoples will be invited');

    // yahan per mene Guest remove kiye hain.
    
    while(Guest_list.length>2) {
    let remove_Guest= Guest_list.pop();
    console.log(`Sorry Mr.${remove_Guest}, You are not invited for Dinner.`);
    }
    // Hamare bache howe 2 invited Guest.

    for(let i=0; i<Guest_list.length; i ++){
        console.log ('Dear Mr. ' +Guest_list [i] + `,\n\n You are still invited.\n\n Thank You!\n\n`)
        }
    // Mene sare guest array se remove kar diye.    

        Guest_list.splice(0,2);
        console.log(Guest_list);    









