// store the rating buttons as an array (not object)
const ratingButtons = document.getElementsByClassName("btn-rating");

// store the two state divs 
const ratingState = document.getElementById("rating-state");
const thankyouState = document.getElementById("thankyou-state");

// declare empty variable to store the rating
let rating;

// loop through the array of btn-rating class buttons
for (var i = 0; i < ratingButtons.length; i++){
// when creating an addEventListener you can use the event object to target the element clicked
    ratingButtons[i].addEventListener("click", function (event) {
        // set the variable to equal the corresponding button rating
        rating = event.target.innerHTML;
        console.log(rating);
        // display the variable to HTML
        document.getElementById("chosen-rating").innerHTML = rating;
    })
}

// make the rating state hidden, make the thankyou state visible 
function changeStates() {
    ratingState.style.display = "none";
    thankyouState.style.display = "flex";
}
