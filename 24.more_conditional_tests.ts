// Date 3-3-2024
// This is "Ambreen",and you are watching the solution of the problem no 24 in typescript ssignment.

//Equality and Inequality Test 1
console.log("Equality test with string :","Apple" === "Apple");
//Equality and Inequality Test 2
console.log("Inequality test with string :",("Apple" as String) != "Orange");

// Test using the lower case function
console.log("Lower case functin test: ","HELLO".toLowerCase()==="hello");

//Numerical test involving equality test
console.log("Equality test with Numbers: ", 26 === 26);
// Numerical test involving inequality test
console.log("Inequality test with Numbers: ",( 26 as number) != 35);

// Greater than test
console.log("Greater than test: ", 10 > 5);
// Less than test
console.log("Less than test: ", 5 < 10);

// Greater than and equal to
console.log("Greater than and equal to test: ", 10 >= 10);
// Less than and equal to
console.log("Less than or equal to test: ", 5 <= 10);

// Test using "and" operator
console.log("And operator test: ", 5 === 5 && 10 > 5);
// Test using "or" operator
console.log("Or operator test: ", 5 === 5 || false);

// Test whether an item is in a array
const fruits : string[]=['Nashpati','Banana','Amrood'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));

// Test whether an item is not in a array
console.log('Testing "Apple" is not in array : ', fruits.includes('Apple'));

// Test whether an item is not in a array
console.log('Testing "Apple" is not in array : ', !fruits.includes('Apple'));