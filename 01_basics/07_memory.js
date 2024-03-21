//  Primitive data type => Stack memory -----> get copy (update is done in copy of the original file)

//  Non primmitive data type => Heap memory  -----> get reference (update is done in original value)

// Example 

let myName = "Rakesh"

let newName = myName
newName = "Rajesh"

// console.log(myName);
// console.log(newName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rakes@google.com"

console.log(userOne.email);
console.log(userTwo.email);