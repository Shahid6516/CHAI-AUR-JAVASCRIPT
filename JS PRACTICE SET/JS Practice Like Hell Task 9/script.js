// ################################* question 9 *################################

// Build a character counter for a text area or input field, which updates in real time as the user types and enforces a charecter limit.


// ############################################################################## 

var textarea = document.querySelector("textarea");
var counter = document.querySelector("#counter");

textarea.addEventListener("input", function(){

    counter.textContent =textarea.value.length;

});