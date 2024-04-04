$(document).ready(function () {
  // Event handler for the "Animate" button
  $('.animate-btn').click(function () {
    // Toggle the 'animated' class on the card elements
    $('.card').toggleClass('animated');
  });

  // Event handler for the "Chain Effects" button
  $('.chained-btn').click(function () {
    // Apply chained effects to the card elements
    $('.card')
      .fadeOut(1000) // Fade out the card elements over 1000ms
      .fadeIn(1000) // Fade in the card elements over 1000ms
      .animate({ // Perform animation
        marginLeft: '+=20px', // Slide elements to the right by 20px
        marginTop: '+=20px' // Slide elements downwards by 20px
      }, 1000); // Animation duration of 1000ms
  });

  // Event handler for the "Stop All Animation" button
  $('.stop-btn').click(function () {
    // Stop all currently running animations on the card elements
    $('.card')
      .stop(true, true) // Stop animations immediately and clear the animation queue
      .removeClass('animated'); // Remove the 'animated' class from the card elements
    location.reload(); // Reload the page to reset the elements to their initial state
  });
});