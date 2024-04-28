// Shopping re amaku jana nathae j user kete ta item add kariba shopping cart re so basically amaku no. of argumments jana nathae
// so kemiti method ku design kariba jauthi amaku no. of argumnets jana nathiba
// so ame use kariba rest operator 
// ex: ...price
// Note: rest and spread operator same but use case different

function calculateCartPrice(...price) {
    return price
}

// console.log(calculateCartPrice(42, 45, 86, 94, 926));

// so rest operator use kari ame sabu price value ku cart re add kariparile



// object ku function re kemiti pass kariba and kemiti use kariba

const user = {
    username: "Rakesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Rajesh",
//     price: 299
// })



// array ku function re kemiti pass kariba and kemiti use kariba

const myNewArr = [200, 563, 883, 374]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 300, 400, 500]));