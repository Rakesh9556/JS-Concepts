// singleton object: using object constructor

// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "9556",
tinderUser.name = "Rakesh"
tinderUser.isLogIn = true

// console.log(tinderUser);

const regularUser = {
    email: "rakesh23@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rakesh",
            lastname: "Guru"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); 
// ? --> optional chaining kuha jae jauta ki amaku protection die jadi kichhi value exist nathiba or null or undefined thiba. Amkau error show kareibani



// object ku kemiti combine kariba:

// ame Object.assign() method re 2 ta object ku merge karipariba
// 3 ta param pass karibaku padiba
// 1. {}, 2. obj1 and 3. obj2  --> first {} define kare j comibine hei guarenteed result asiba obj form re
// jadi ame {} (targeted object) na daba then amara value guda merge hei obj 1 re store haba new separate object re nuhen 
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);

// ame .spread method re bi object ku combine karipariba
const obj3 = {...obj1, ...obj2};
// console.log(obj3);


// data base ru value kemiti ase
const users = [
    {
        id: 1,
        email: "rakesh@gmail.com"
    },
    {
        name: "rakesh",
        fullname: "rakesh guru"
    }
]

// access kemiti kariba
users[1].email  // [1] represents j ame user object ra first value ku access kariba
// console.log(tinderUser);

// suppose amaku ama ibject bhitare sabu key ku janibara achhi then ame use kariba:
// Object..key() --> a method re param pass kariba object name jau object ra key ku ame janibaku chanhuche
// ea return kare sabu key ku array format re so ame easily aku use kari object key ku traverse karipariba
// console.log(Object.keys(tinderUser)); 

// Similary ame object ra value gudaku retrive karipariba:
// Object.values() --> param pass kariba object name
// console.log(Object.values(tinderUser));

// Similarly ame object ra entry ku retrive karipariba:
// entry means each <key,value> pair ku gote gote entry kuhajae
// Object.entries() --> param pass kariba object name
// console.log(Object.entries(tinderUser));


// Emiti bi situation ase jauthi ame gote object ru kichhi value access karuthiba but se value exist karunathiba setebele error asithae
// so object re gote value exist karuchi na nahin janiba pain ame a property ku use karipariba:
// objectName.hasOwnProperty() --> param re pass kariba se value jahaku ame find karibaku chanhuche object re present achi ki nahin
// Note: only key lu find kariba pain use hue
// console.log(tinderUser.hasOwnProperty("isLogIn"));


// Extras: 
// Object re au kna sabu method achhi janiba pain ame browser ra console ku use karipariba
// Console ku jaiki gote object paste kari access kari sabu property guda ame Prototype re dekhipariba



// Destructuring of object

const course = {
    coursename: "Compelete Backend Development",
    price: "999",
    courseInstructor: "Hitesh Sir"
}


// object value ku kemiti access kariba

// suppose ame courseInstructor value ku access karibaku chanhuche

// 1st way

// course.courseInstructor 
// but aita optimised way nuhne kahinki na jetethara amaku courseInstructor ku access karibaku haba sabuthara course.courseInstructor lekhibaku padiba 

// 2nd way: optimised way
// const {kna access kariba} = kauthu access kariba(object name)

const {courseInstructor} = course
console.log(courseInstructor);  // so ethire amaku barambar course.courseInstructor use karibaku padibani

// ame aku modify bi karipariba suppose amaku courseInstructor bada name laguchi so taku ame ama hisab re name deipariba, like:
const {courseInstructor: instructor} = course
console.log(instructor);


/*

// reeact re bi destructuring hue props use kale bele
// ex: Suppose gote navbar ama pakhare achi and taa bhitare ame props pass karuche

const navbar = (props.company) => {

}

const navbar = ({company}) => {

}

<navbar company = "hitesh" />

// props re amaku props.company pass karibaku pade but ame destructrue kari only {company} pass karipariba

*/


// API (Application Programming Interface)

// backend ru kemiti data asuchi and frontend rre kemiti se data serve hauchi taku hin api kuha jae

// json format re value backend ru ase

// example of api:

// api both objec form re bi heipare and array form re bi heipare

// proper json re key and value both string re thae


// api in object form

// {
//     "name": "Rakesh",
//     "coursename": "Complete Backed Development",
//     "price": "999"
// }

// api in array form

// [
//     {},
//     {},
//     {}
// ]


// follow up api: randomuserme

// understand api: json formatterk







