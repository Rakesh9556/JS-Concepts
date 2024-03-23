const name = "rakesh" //normal string declaration

const repoCount = 43

// console.log(name + repoCount + "value"); //not recommended

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//String interpolation

const myName = new String('rakesh guru') //using new keyword to create a string object // use this in browser console to see all methods of string

// console.log(myName[0]); //access keys 
// console.log(myName.__proto__); //to get object

// console.log(myName.length); //to get length

// console.log(myName.toUpperCase()); //to make the name uppercase

// console.log(myName.charAt(2)); //to get character at certain position
// console.log(myName.indexOf('k')); //to get postion of any character

// Sub string => does not consider negative value

const newName = myName.substring(0, 3) //print the substrinng from index 0 to 3 
// console.log(newName);

// Slice => includes negative values

const newName1 = myName.slice(-8,1)
// console.log(newName1);


// Trim => remove the space from the string

const  newString = "   rakesh "

// console.log(newString);
// console.log(newString.trim());  //print the string with no space


// Replace =

const url = "http://rakesh.com/rakesh%20guru"

console.log(url.replace('%20', '-'));

console.log(url.includes('rg'));
console.log(url.includes('rakesh')); 

console.log(url.split('/'));














 