// 2 == "2" --> only check kariba 2 ta value equla ki nahin
// hele aita sabu case re true heinathae, ex:
// if(2 == "2") {
//     console.log("executed");  
// }

// a upara code execute heijiba jauta ki correct nuhen
// so sethipain ame strict equal '===' use karu ---> ea type bi check kare, like:
// if(2 === "2") {
//     console.log("executed");  
// }


// Truthy and false value

// values jau gudaku ame true boli consider kariba jetebele ame boolean context re kichhi  bi evaluate karu

const useremail = "rakesh@gmail.com"

// if (useremail) {     // truthy value: because we assumed email is there
//     console.log("Email is verfied");
// }
// else {
//     console.log("Email is required");
// }

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value
// "0", 'false', " ", [], {}, function(){}

// check array is empty or not
const user = []

// if (user.length == 0) {
//     console.log("User not exist");
// }

// similarly check object is empty or not

const user1 = {}

// if (Object.keys(user1).length == 0) {
//     console.log("User object is empty");
// }


// Note

false == 0  // true

false == '' // true

0 == '' // true



// Nullish Coalscing Operator (??)

// only dekhiba null au undefined upare
// first value jaha thiba taku access kari set kairdaba varible re

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 5 ?? 10

// console.log(val1);



// Ternary Operator

// condition ? true : falsek
