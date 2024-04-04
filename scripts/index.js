$(document).ready(function() {
    // Attach click event listener to the hide button
    $('.hide-button').click(function() {
      // Toggle the 'fade-out' class on all direct children of <body> except <section>
      $('body > *:not(section)').toggleClass('fade-out');
      // Toggle the 'fade-out' class on all direct children of <section> except elements with 'preserve-element' or 'content-container' class
      $('section > *:not(.preserve-element):not(.content-container)').toggleClass('fade-out');
      // Toggle the 'fade-out' class on all direct children of elements with 'content-container' class except elements with 'preserve-element' class
      $('.content-container > *:not(.preserve-element)').toggleClass('fade-out');
    });
  });