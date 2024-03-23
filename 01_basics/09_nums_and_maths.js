const score = 10
// console.log(score);

//explicitely declare

const balance = new Number(100)
// console.log(balance);

//convert to string => toSTring()
// console.log(balance.toString());

// to show precision value => toFIxed()
// console.log(balance.toFixed(2));


// toPrecision()
const numb = 123.89
// console.log(numb.toPrecision(3));

//toLocalString => convert thee numbers into radible by adding commas
const price = 1336372
// console.log(price.toLocaleString()); //shows as US standard
// console.log(price.toLocaleString('en-IN'));  //shows as Indian standards

//Maximum and min value

// NUmber.MAX_VALUE
// NUmber.MIN_VALUE


// ++++++++++++++++++++++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));  //absolote value
// console.log(Math.round(7.35));  //round up  decimal values to nearest integer
// console.log(Math.ceil(7.35)); // round up to greater number
// console.log(Math.floor(7.35));  // round up to lowest



// console.log(Math.random());  //return random value between 0 to 1

// console.log(Math.floor(Math.random() * 10) +1);  //return random value between 1 to 10

// to return value from 20 to 30 
 const min = 20
 const max = 40

 console.log(Math.floor(Math.random() * (max- min + 1)) + min);








