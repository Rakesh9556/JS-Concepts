//  Dates -- has been calculated from 1st January 1970 in milisecond till now

let myDate = new Date();

// console.log(myDate);

//convert to string
// console.log(myDate.toString());
// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleString()); // returns both date and time in general 
// console.log(myDate.toLocaleDateString()); // returns only date
// console.log(myDate.toLocaleTimeString());  // returns only time

// console.log(typeof myDate);

//create a new date
let myCreatedDate = new Date(2023, 4, 23)  // *note* ---> month starts from 0
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 4, 23,  5, 4)  // *note* ---> month starts from 0
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("01-12-2023")  // *note* ---> month starts from 0
// console.log(myCreatedDate2.toLocaleString());


// Time stamp 

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());  // used in to compare both date

// console.log(Math.floor(myTimeStamp/1000));  // divide with 1000 to get time in second && the value comes in decimal so Math.floor() is used


let newDate = new Date();

// console.log(newDate.getMonth()); // month starts with 0
// console.log(newDate.getDay());

// special method

const res = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(res);
