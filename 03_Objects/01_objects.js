// Objects can be accessed using keys and values

// Object declare in two types:

// 1. using constructor method
// Object.create(JsUser);  // singleton is formed in it // singleton : object is unique

// 2. object literal

// symbol
const mySym = Symbol("key1");

const JsUser = {
    "full name": "Rakesh Guru",
    [mySym]: "my key",
    username: "rakesh@432",
    email: "rakeshguru9556@gmail.com",
    age: 20,
    isLoggedIn: true
}

// value ku access kariba pain 2 ta way achhi

   // first way
   // console.log(JsUser.username)

   // Second way: optimized
   // console.log(JsUser["username"])

   // second way optimized because jadi ame fullname ku access kriba pain chanhiba, then first way re fullaname ku access kariparibani
   // console.log(JsUser.full name); // error return kariba
   // console.log(JsUser["full name"]);  // a way re full name access karipariba

   // symbol ku access kariba pain ame  use kariba:
   // console.log(JsUser[mySym]);



// object bhiatare value ku change kariba pain hele amaku .field use kari change karibaku haba, ex:
JsUser.username = "rajeshguru@2021";
// console.log(JsUser["username"]);

// jadi value ku lock karibaku chanhuche jemiti ki au kie use kariparibani value ku then Object.freeze() method re karipariba
// param re object ku pass kariba
// Object.freeze(JsUser);
JsUser.email = "rakeshguru@cutm.ac.in"
// console.log(JsUser);


// function ku add kariba object bhitare, so ame function ku as usual other data bhali treat kariba, ex:
// const greeting = function () {
//    console.log("hello user");
// }

// console.log(greeting);
// console.log(greeting());

const greeting1 = function () {
   console.log(`Hello, ${this.username}`);
}

console.log(greeting1());



