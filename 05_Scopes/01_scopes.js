// scope stroy start hauchi a 3 ta ru

if(true) {
    let a = 20
    const b = 30
    var c = 40
}

// console.log(a);  // error daba because a method bhitare declare heichi and ame taku method bahare access kariba pain try karuche
// console.log(b);  // similarly ea bi error daba 
// console.log(c);  // but ea error dabani:  
// so var scoping kiu fullow kareni so sethipain ame var use kariba avoid kariba


// Block scope and global scope 

// if bhitare jaha achhi se hauchi block scope 
// and if bahare jaha achi se hauchi global scope 


// Note: Browser scope alaga and code enviirnment re node re scope alaga



// Nested scope

function one() {
    const username = "Rakesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // error daba kahinki na website bhiatara scope re achhis

    two()
}

// one()


// closure meaning hela bhiatare thiba function bahare thiba varibale ku access karipariba


// another example:

if (true) {
    const username = "rakesh"
    if (username === "rakesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // error dekheiba
}
// console.log(username); // error dekheiba



// +++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++

// function
// interesting hela a function ku ame call karipariba declaration purbaru, ea error dabani
addOne(5)

function addOne(num) {
    return num+1
}



// function also called expression:
// but ethi jadi  ame declaration purbaru call kariba tahale, ea error show kariba
// kahinki na ethi ame function ku gote varibale re store kariche so, dedclaration purbaru ame call kariparibani
addTwo(5)

const addTwo = function(num) {
    return num+2
}
