// const user = {

//     username: "Shahid",
//     price: 999,

// This keyword current context ko refer karta hai

//     welcomeMessage: function () {
//         console.log(`${this.username}, Welcome to website`);   // this keyword is used for current context  means you need this keyword to access value you can't declare direct
//         // console.log(this);

//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);

// function chai(){
//     let username = "Shahid"
//     console.log(this)

// }
// chai()



// ######  Arrow Function ###########

// const chai = function(){
//     console.log("Shahid");

// }

// chai()


// const chai = ( ) => {
//     console.log("this is arrow function")     // this is arrow function
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                     // basic arrow function
// }
// console.log(addTwo(2 , 2))


// implicit return   isme {} nahi lagte hain

const addTwo = (num1, num2) =>  (num1 + num2  )    // implicit return
                          
 console.log(addTwo(2 , 2))
     