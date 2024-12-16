// for of 

// const arr = [1 ,2 ,3 , 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// } 


// const greetings = "Hello World"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
    
// }

// Maps    // Maps known for it's unique values

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United State Of America")
// map.set('Fr', "France")

// console.log(map);


// for (const [key , value] of map) {
//     console.log(key, ":-", value);
    
    
    
// }

// for in 


// const myObject ={
//     js: "Javascript",
//     py: "python",
//     cpp: "c++",
//     rb: "ruby"
// }

// for (const key in myObject) {
//     // console.log(myObject[key]);

//     console.log(`${key} shortcut cut is for ${myObject[key]}`);
    
    
    
// }


// for each loop         *Important*

// const coding = ["js", "Pyhton", "Ruby", "java", "cpp"]

// coding.forEach(function (item) {
// console.log(item);


// })

// function printme(item) {

// console.log(item);


    
// }
// coding.forEach(printme)

const myCoding =[
    {
        languageName: "Javascript",
        lnaguageFileName:"js",

    },
    {
        languageName: "java",
        lnaguageFileName:"java",

    },
    {
        languageName: "Python",
        lnaguageFileName:"Py",

    },

]

myCoding.forEach(function(item){
console.log(item.languageName);

})