function addtwoNumbers(number1, number2) {   
    console.log(number1+number2);
}

// addtwoNumbers(5, 9);

// Parameter and Arguments
// function define bele jauta use hue (number1, number2) asabu ku parameter kuhajae
//function call kala bele jau value pass hue (5, 9) asabu ku argument kuhajae


// ame function ku gote variable re store kari rakhipariba

// const addNum = addtwoNumbers(3, 5);
// aa ra output 8 asiba 
// but ame jetebele addNum ku console kari dekhiba 
// console.log(addNum);
//tahale output undefined asiba
// kahinki na ame function bhitare kichhi vbi value ku return karine only console kariche
// so addNum varibale re kichhi bi value store heini, jadi function ru kichhi value return heithiba then store haba


// example:
function multiplytwoNumbers(number1, number2) {
    return number1*number2;
}

const multNum = multiplytwoNumbers(6, 8);
// ebe jetebele multNum ku console kariba tahale undefined milinbani, amaku value miliba 
// console.log(multNum);


// user log in method

function loginUserMessage(username = "Guest") {   // ethi ame equal kari default value bi deipariba jadi user kichhi bi argument nadea tahale default value show haba
    if(!username) {
        console.log("Enter username");
        return
    }
    return `${username} just logged in`
}

// jadi kichhi argument pass na hue then result undefined asiba
const login = loginUserMessage()
// const login = loginUserMessage("rakesh@9556")


console.log(login);
