// object literal   // this is non single turn object

// const mySym = Symbol("key1")  // symbol is important in interview

// const jsUser = {

//     name : "shahid",
//     "full name": "Mohammad Shahid",
//     [mySym] : "Mykey1",  // this  is the keyword to declare symbol
//     age : 20,
//     location : "shohratgarh",
//     email : "wdythe@gmail.com",
//     lastLoginDays : ["Monday", "saturday"]


// }

// console.log(jsUser.email);        // this is first method to target element
// console.log(jsUser["email"]);       // this is the  method to target multiple element

// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);    // this is the method to use symbol

// jsUser.email = "www.shahih6516@gmail.com"  // we can change value by targetting elem
// console.log(jsUser.email);

// Object.freeze (jsUser)    // after freeze method we can't rewrite/change value


// jsUser.greeting = function(){
//     console.log("hello JS");

// }
// jsUser.greetingTwo = function(){
//     console.log(`hello js user, ${this.name}`);  // this is call string interpulation 

// }

// console.log(jsUser.greetingTwo());

// #############################################################33


// object singleton/how to write object using constructer       * this is a single turn object *


// const tinderUser = new Object()

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "shahid"
// tinderUser.isLoggedIn = false



// console.log(tinderUser);



// const regularUser = {
//     email: "wdythe@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Mohammad",
//             lastname: "Shahid",

//         }
//     }

// }
// console.log(regularUser.fullname)


// const obj1 = {1: "a", 2: "b" }
// const obj2 = {3: "c", 4: "d" }


// const obj3 = Object.assign({}, obj1,obj2)   // to combine value
// console.log(obj3);


// const obj4 = {...obj1,...obj2}   // this is easiest method to combine value [using spread operator]
// console.log(obj4);


// ####################################################3

const course = {
    coursename: "chai aur js ",
    price: "999",
    courseinstructer: "Hitesh Choudhary"


}

//object  destructere

course.courseinstructer

const {courseinstructer:instructer} = course // this is destructering

console.log(instructer);

// https://api.github.com/users/hiteshchoudhary




  {
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }
