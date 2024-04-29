// Immediately Invoked Function Expressions (IIFE)

// Use:
// jetebele ame program lekhu and database connect karu ame chanhu j jetebele ama application start hue setbele snage sange ama database connection execute heijau
// so setebele IIFE use karajae
// and global scope ra pollution jogu problem hue so global scope re thiba varibale or declaration ra pollution ku hateiba pain IIFE use hue

// example:

// function dbConnect() {
//     console.log("DB CONNECTED SUCCESSFULLY");
// }

// dbConnect()

// to make it IIFE

// called named IIFE because a function ra name achhi
(function dbConnect() {
    console.log("DB CONNECTED SUCCESSFULLY");
})();


// declaration of IIFE

// ()()
// (function)(execution)

// in arrow function, it look like
//(() => {})()

(()=>{
    console.log("DB CONNECTED TWO");
})();  // end re semicolon nihat jaruri kahinki na IIME ku jana nathae kauthi context ku stop kariba so sethipain termination kariba nihati darkar 


// suppose amaku argument pass karibara achi kemiti kariba
// argument IIFE ra execution part re pass haba

((port)=>{
    console.log(`DB CONNECTED at port: ${port}`);
})(3000); 