// Date : 26-2-2024
// This is "Ambreen",and you are watching the solution of the problem no : 21 in typscript.

import { Console } from "console"

//  Write a program that creates Objects containing these items.

// let person_Name : string = 'Ambreen';

// const personName_Array : String[] = ['person','car','plant'];

// Datatype of person object
interface person {
    age : number,
    name : string ,
    nationality : string,
    student : boolean ,
}
// person object
let person ={
    age : 40,
    name : 'Ambreen',
    nationality : 'Pakistan',
    student : true
}
// print person
console.log(person);
// Datatype of car object
interface car{
    maker : string ,
    color : string ,
    automatic : boolean,

}

// car object 
let car = {
    maker : 'Toyota',
    color : 'Black',
    automatic : true
}
// print car
console.log(car);
