// ################################* question 8 *################################

// create a search bar that displays live search result as users type, updating the results without requiring a full page relaod. 

// ############################################################################## 


var input = document.querySelector("input");
var data = [
    { name: "harsh", src: "pexels-pixabay-415829 (1).jpg" },
    { name: "harshista", src: "pexels-pixabay-415829 (1).jpg" },
    { name: "harshika", src: "pexels-pixabay-415829 (1).jpg" },
    { name: "shyam", src: "pexels-pixabay-415829 (1).jpg" },
]

var pers = "";
data.forEach(function (elem) {

    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>

                </div>`;

})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function(){

     var matching = data.filter(function(e){
       return e.name.startsWith(input.value)

    })

    var newusers = "";

     matching.forEach(function (elem) {

        pers += `<div class="person">
                        <div class="img">
                            <img src="${elem.src}" alt="">
                        </div>
                        <h4>${elem.name}</h4>
    
                    </div>`
    
    })
    
    document.querySelector(".people").innerHTML = newusers ;
    
    
})