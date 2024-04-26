// Objects can be accessed using keys and values

// Object declare in two types:

// 1. using constructor method
// Object.create(JsUser);  // singleton is formed in it // singleton : object is unique

// 2. object literal
const JsUser = {
    "full name": "Rakesh Guru",
    username: "rakesh@432",
    email: "rakeshguru9556@gmail.com",
    age: 20,
    isLoggedIn: true
}

// value ku access kariba pain 2 ta way achhi

   // first way
   console.log(JsUser.username)

   // Second way: optimized
   console.log(JsUser["username"])

   // second way optimized because jadi ame fullname ku access kriba pain chanhiba, then first way re fullaname ku access kariparibani
//    console.log(JsUser.full name); // error return kariba
   console.log(JsUser["full name"]);  // a way re full name access karipariba
