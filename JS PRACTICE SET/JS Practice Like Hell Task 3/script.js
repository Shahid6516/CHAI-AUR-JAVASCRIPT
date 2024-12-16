// ################################* question 3 *################################

// Create a form with input fields and a submit button. use javascript to validate the form and display an error message if the input is invalid.

// ############################################################################## 

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type = "text"]');
var h2 = document.querySelector("h2");




form.addEventListener("submit",function (ev) {
    ev.preventDefault();
    for(i=0; i<inps.length; i++){
        if(inps[i].value === ''){
            h2.textContent="Error, some fields are blank";
            h2.style.color="red";
            break;

        }
    }

});



