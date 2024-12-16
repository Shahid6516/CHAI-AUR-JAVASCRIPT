// iteration is the second name of loop

// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
// if (i === 5) {

//     console.log("5 is best number");


// }

//     console.log(element);

// }


// for (let i = 1; i <= 10; i++) {

//     console.log(`outer loop value:${ i }`);


//     for (let j = 0; j <= 10; j++) {

//         console.log(`inner loop value: ${j} inner loop ${i}` );

//     }



// }


// let myArray = ["Flash", "Batman", "Superman"]

// for (let index = 0; index < myArray.length; index++) {    
//     const element = myArray[index];
//     console.log(element);

// }


// Break and continue

// for (let i = 1; i <= 20; i++) {

//     if (i == 5) {
//         console.log("5 Detected");
//         break;       // kisi bhi control flow ko agar break karna ho to vahan break ka use karte hain


//     }


//     console.log(i);

// }


for (let i = 1; i <= 20; i++) {

    if (i == 5) {
        console.log("5 Detected");
        continue;


    }


    console.log(`value of i is: ${i}`);

}