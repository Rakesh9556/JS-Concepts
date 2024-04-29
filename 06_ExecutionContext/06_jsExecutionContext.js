// java script execution context means jaha bi javascript file ame baneiche taku javascript kemiti ruun kariba se concept ku javascript execution context kuha jae

// java script code ku nei first:

// 1. Global Exececution context/ Global envirnment baneiiba and taku refer karidaba this sahita (browser re Global Ec hauchi window)

// java script hauchi single threaded aa bhitare sabu jinsa gote gote process

// 2. Function/Funnctional Execution COntext

// 3. Eval Execution Context


// code 2 ta phase re run hue

// 1. Memory Creation phase (allocate memory for declared varibales)

// 2. Execution phase


// EX: 

let val1 = 10;
let val2 = 15;

function addNumber(num1, num2) {
    let total = num1+num2
    return total
}

let result1 = addNumber(val1, val2)
let result2 = addNumber(6,8)


// first memory phase re sabu varible ku neijiba and taa bhiatre undefined store haba
// val1 -> undefined
// val2 -> undefined
// addNumber --> defination
// result1 -> undefined
// result2 -> undefined

// next execution phase re vallue sabu assign haba
// val1 -> 10
// val2 -> 15
// result1 -> addNumber()
// next jetbele result1 execute habaku asiba se function magiba so
// jetebele gote function call haba setbele gote nua box create haba jahaku kuhajae new executional context
// and aa bhitare new varibale envirnment and execution thread thae
// so jetethara function call hue amaku new memory creation phase and exuction phase baneibaku pade
// and kama sarile delete bi heijae 
// Memory phase
// val1 -> undefined
// val2 -> undefined
// total -> undefined
// Execution context
// num1 -> 10
// num2 -> 15
// total -> 25
// so a total return heijiba global execution context re so
// result1 -> 25

// result2 -> addNumber()
// simliarly result2 re bi gote function execute hauchi
// so new executional context form haba and aa bhitare new varibale envirnment and execution thread thae
// jand taa bhiitare 2 ta phase thae memory creation phase and execution phase

// Memory phase
// total -> undefined

// Execution Phase
// num1 -> 6
// num2 -> 8
// total -> 14
// so a total return heijiba global execution context re so
// result2 -> 14




// Call stack

// stack re first global execution thae 
// and jete sabu function thae se sabu stack ku ase execute hue and then remove heijae

// complexity setbele ase jebe ame function bhitare function ku rakhu means gote function stack re execute hauthiba and tt bhitare ame au gote function ku call karidaba
// so as stack LIFO follow kare so jau function last re thiba seita last first execute hei baharijiba stack ru

// ame browser re inspect kari source ku jai gote js snippet baneiba