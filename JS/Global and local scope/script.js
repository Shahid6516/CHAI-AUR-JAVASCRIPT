// let a = 10;
// const b = 20;     
// let c = 30;     // avoid var in js 




// if (true) {
//     let a = 10; 
//     const b = 20;      // these are called block scope and outside of the if is called global scope
//     let c = 30;        
// }
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Shahid"

    function two(){
        const website  = "youtube"
        console.log(username);
        
    }

    // console.log(website);
    

two()

}

// one()


// ++++++++++++++++++++++++++++++++ *INTERESTING* ++++++++++++++++++++++++++

function addone(num){
    return num + 1
}
console.log(addone(10));
