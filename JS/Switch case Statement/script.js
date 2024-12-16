// Switch case statement syntax

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }



const month = "March"

switch (month) {
    case "january":
        console.log("January");
        break;                        // break control flow ko break kar deta hai
    case "feb":
        console.log("Feb");
        break;
    case "March":
        console.log("March");
        break;                              // break stop the code when condition is true if there is no break then it will execute all the code expect default
    case "April":
        console.log("April");
        break;


    default:
        console.log("default case match");

        break;
}