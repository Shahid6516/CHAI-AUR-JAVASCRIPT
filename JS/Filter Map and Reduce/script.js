// const coding = [ "js", "python", "ruby" , "cpp"]

// const values = coding.forEach( (item) => {

//     console.log(item);
    
// })

// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num)=>{

//    return num > 4    // if you are using scope then you have to use return otherwise it will not work
    
// } )

// console.log(newNums);


// const myNumbers = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// // const newNums = myNumbers.map((num)=> num + 10)

// const newNums = myNumbers.map((num)=> num * 10 ).map((num) => num + 1)   // this is called chaning we can use map and filter multiple time

// console.log(newNums);


// Reduce

// const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc , currval){
//     console.log(`acc: ${acc} and currval ${currval}`);
    
//     return acc + currval

// }, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemname : "Js Course",
        price: 2999

    },
    {
        itemname : "Python Course",
        price: 999

    },
    {
        itemname : "Mobile Development",
        price: 4999

    },
    {
        itemname : "Data Science",
        price: 9999

    }

]

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price, 0 )
console.log(priceToPay);

 