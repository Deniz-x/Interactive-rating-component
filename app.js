let userRating = 0;



const ratingForm = document.querySelector(".rating-form:not(.thank-you-card)");
const thankYouCard = document.querySelector(".thank-you-card");
const yourSelectionSpan = document.querySelector('#user-rating');
ratingForm.addEventListener("submit", function(e) {
    //prevent the form's default behaviour of refreshing/redirecting to another page when clicked submit
    e.preventDefault();
    this.classList.add('hidden');
    thankYouCard.classList.remove('hidden');
    yourSelectionSpan.innerText = userRating;

});

const ratingBubbles = document.querySelectorAll('.rating-btn')
console.log(ratingBubbles);

// Convert the node list into an Array so we can
// safely use Array methods with it
let ratingBubblesArray = Array.prototype.slice.call(ratingBubbles);

ratingBubbles.forEach(function(ratingBubble) {
    ratingBubble.addEventListener("click", function handleClickBubble() {

        console.log(this.getAttribute('id') + " clicked")
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
            console.log(userRating);
            
        }
    
    });
});



