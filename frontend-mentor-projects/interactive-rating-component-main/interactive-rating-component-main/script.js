// getting element by class name gives an array, not an object
const ratingButtons = document.getElementsByClassName("btn-rating");
let rating;

// loop through the array of btn-rating class buttons
for (var i = 0; i < ratingButtons.length; i++){
// when creating an addEventListener you can use the event object to target the element clicked
    ratingButtons[i].addEventListener("click", function (event) {
        rating = event.target.innerHTML;
        console.log(rating);
    })
}


