let userRating = 0;

function showHide() {
    console.log("you clicked submit");
    this.classList.add('hidden');

    
}

function handleClickBubble() {
    console.log(this.classList.contains('clicked'));

    if(this.classList.contains('clicked')) {
        this.classList.remove('clicked');
    }
    
    else {
        //if one bubble is clicked make the other bubbles unclicked
        const prevClickedBubble = document.querySelector(".clicked");
        if(prevClickedBubble!=null){
            prevClickedBubble.classList.remove("clicked");
        }
        
        //actually click the selected button
        this.classList.add('clicked');
        userRating = this.getAttribute('value')
        
    }

}

const ratingForm = document.querySelector(".rating-form:not(.thank-you-card)");
ratingForm.addEventListener("submit", showHide);

const ratingBubbles = document.querySelectorAll('.rating-bubble')
console.log(ratingBubbles);

// Convert the node list into an Array so we can
// safely use Array methods with it
let ratingBubblesArray = Array.prototype.slice.call(ratingBubbles);

ratingBubbles.forEach(function(ratingBubble) {
    
    ratingBubble.addEventListener("click", handleClickBubble);
});



