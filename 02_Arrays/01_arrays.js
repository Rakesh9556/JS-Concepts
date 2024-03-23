// Arrays --> 0 based indexing

const name = ["rakesh","rajesh", "hitesh", "suresh"]

const numbers = new Array(1, 2, 3, 4, 5, 6)

// copy operation in arrays create shallow copies => means changes in some elements leads to changes in original element 

//Methods of array

// numbers.push(11)  // to add values
// // console.log(numbers);

// numbers.pop() // to remove last value in array
// // console.log(numbers);

// numbers.unshift(8)  // to add values in starting
// console.log(numbers);

// numbers.shift()  // to remove values from the starting
// console.log(numbers);
// console.log(numbers);
// console.log(numbers.includes(14));  // shows the elements are present in the array or not

// console.log(numbers.indexOf(9));  // return the index value of an presented element else return -1


const newNumbers = numbers.join()  // convert the array into string
// console.log(numbers);
// console.log(newNumbers);
// console.log(typeof newNumbers);


// Slice and Splice method 

console.log("A", numbers);

const myn1 = numbers.slice(1,3)
console.log(myn1);

console.log("B", numbers);

const myn2 = numbers.splice(1,3)  // manipulate the array by removing, adding elements or both from the array => splice(st_index, no. of elements to remove)
console.log("C", numbers);
console.log(myn2);












