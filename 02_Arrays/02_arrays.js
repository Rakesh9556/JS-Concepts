const lang = ["java", "python", "javascript"];
const channel = ["codewithharry", "chaiaurcode", "anujbhaiya"];

/*
lang.push(channel);  // .push() --> new item add kariba pain use hue

// ame expect karithile ki 2 ta array  merge heijiba but ea 2nd array ku pura as an element accept karichi
console.log(lang); 

// 2nd array ra element ku dekhibaku hele amaku 3rd element ku access kari 2nd array ra indexing ku return karibaku padiba, like below
console.log(lang[3][0]);

*/

/*
// so amaku jadi 2 ta array ku merge kari show kareibara achi then ame
// .concat() method use kari merge karipariba 2ta array ku

const learncoding = lang.concat(channel);
console.log(learncoding);

*/


/*
// ame au gote way re merge karipariba
// .spread() method use kari ---> a method array ku spread karidie individual elements re
// advantage over of .concat() method hauchi ki ame multiple array ku combine karipariba jauta ki concat() method re possible nuhen

const learncoding = [...lang, ...channel];
console.log(learncoding);

*/


/*

// emiti bi case asi pare jauthi array bhiatare array thiba nested heiki multiple level re, for ex:

const myarr = [1, 2, 3, [20, 30, 40, 50], 4, 5, [11, 22,[100, 200, 300], 33, 44],6, [60, 70], 7, 8];

// so ame motive hela ki amaku gote simple array darkar jauthi ki sabu element nested re nathiba, simply show heijauthiba
// so .flat() method amaku gote resulted array return kariba jauthire ki sabu  sub-array elements amaku gote single array re show heijiba
//  param re a depth mage, means kete depth jae array ku recursively show kareiba, jadi level jana nahin then Infinty param pass kale a inifitely recursive kari element ku show karae

const result = myarr.flat(2);
console.log(result);

*/



// amaku bele bele janibaku thae j ama data jaha bi achhi se array format re achhi na nahin and kichhi smaayarr amara kichhi data ku like(string, object) ku amaku array re convert karibaku pade so taku kariba pain ama pakhare gote ethod achhi

// Array.isArray() --> ea check kare j jaha param ame pass karuche se array re achhi ki nahin, ex:
const isArray = Array.isArray("Rakesh");
// console.log(isArray);

// Array.from() --> ea help kare kichhi bi data, string ki objectru array from kariba pain, ex:
const formedArr =Array.from("Rakesh");
// console.log(formedArr);

// Special example: creation of array of objects
const objArr = Array.from([{name: "Rakesh", class: "Btech"},{name: "Rakesh", class: "Btech"},{name: "Rakesh", class: "Btech"},{name: "Rakesh", class: "Btech"}]);
// console.log(objArr);


// Another special example: creation of array from object
const obj1Arr = Array.from({name: "Rakesh", class: "Btech"});
// console.log(obj1Arr);  // special case

// Another special example: creation of array from set of elements: kichhi bi eleemnt ru array form kariba
// Arrays.of() --> ea elements ku as a param naba and se elements ku array re convert karidaba, ex:
let score1 = 100;
let score2 = 200;
let score3 = 300;
const name = "Rakesh";
let elementArr = Array.of(score1, score2, score3, name);
console.log(elementArr);  // special case
