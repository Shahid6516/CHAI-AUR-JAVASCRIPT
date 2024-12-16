// immediately Invoked Function Expressionsm   (IIFE)

(function chai() {
    console.log("CONNECT DATABASE");         //this is the syntax of iife

})();   //; sometimes semocolon cause for the error to run two function in IIFE                                    // IIFE function ko turant run kar deta hai

// global scope ke pollution se problem hoti hai to us global scope me jo variable ya polituon hain uske hatane ke liye IIFE ka use hota hai


(function chai() {
    console.log("CONNECT DATABASE");         

})()