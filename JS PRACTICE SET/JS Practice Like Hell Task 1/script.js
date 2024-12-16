// ################################* question 1 *################################

// Create a html page with a button. when the button is clicked, change the text of a paragraph element



// ############################################################################## 


var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener('click', function () {

    p.textContent='hellooo';

})