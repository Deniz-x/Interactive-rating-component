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

const ratingBubbles = document.querySelector('#rating-bubbles');
//using event delegation, add an event listener to the parent so all descendants have an event listener
ratingBubbles.addEventListener("click", function(e) {

    const target = e.target;
    
    if(target.classList.contains('clicked')) {
        target.classList.remove('clicked');
    }
    
    else {
        //if one bubble is clicked make the other bubbles unclicked
        const prevClickedBubble = document.querySelector(".clicked");
        if(prevClickedBubble!=null){
            prevClickedBubble.classList.remove("clicked");
        }
        
        //actually click the selected button
        target.classList.add('clicked');
        userRating = target.getAttribute('value')
        console.log(userRating);
        
    }

});




