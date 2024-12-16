// ################################* question 6 *################################

//create a tabbed interface where clicking on tabs displays different content sections without page reload.


// ############################################################################## 

var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");


var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var contacttext = document.querySelector("#contacttext");

hometext.style.display = 'block';

home.addEventListener("click", function () {
    removeAllText();
    hometext.style.display = 'block';



})

about.addEventListener("click", function () {
    removeAllText();
    abouttext.style.display = 'block';


})

contact.addEventListener("click", function () {
    removeAllText();
    contacttext.style.display = 'block';


})


function removeAllText() {

    document.querySelectorAll("h3").forEach(function (h3) {
        h3.style.display = "none";

    });
};