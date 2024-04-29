const user = {
    username: "Rakesh",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// jadi ame username change karidaba tahale:
// user.username = "Rajesh"
// user.welcomeMessage()


// ama current context hela a user scope bhiatre 

// hele global re means user bahare ama current context kna
// console.log(this)
// ame node envirnment re ache so this refer kariba empty object ku kahinki na global re ebe kichhi context hin nahin
// browser re this refer kare window object ku


function raka() {
    // const myname = "Rakesh"
    // console.log(this.myname);  // aita work karibani kahinki na this keyword kebala object bhiatre kama kare function bhitare nuhen 
    console.log(this);  // global object ku refer kare
}

// raka()


// ++++++++++++++++++++++++++++++++++++ Arrow Functiion +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const userIdentity = () => {
    console.log(this); // null object ku return kare, au ea this ku support kareni
}

// userIdentity()


// explicit return arrow function (means return keyword lageibaku padiba)

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// console.log(addTwo(7, 9))



// implicit return arrow function (means return keyword lageibaku padibani)

// jetebele gote line ra statement thae setebele ame use karipariba
// return keyword lageiba darkar nahin

// const addTwo = (num1, num2) => num1+num2
//or
// const addTwo = (num1, num2) => (num1+num2)

// paranthesis lageibare goyte fyda achhi ame easily object ku return karipariba
// jadi ame normally object ku return karibaku try kariba undefined show haba
// const addTwo = (num1, num2) => {Username:  "rakesh"}  // undefined dekheiba
// but ame paranthesis use kale, thik se object execute haba, like
const addTwo = (num1, num2) => ({Username:  "rakesh"})






console.log(addTwo(7, 9))




