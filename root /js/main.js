$(document).ready(function(){
    // Set Basic variables
    var slides = $('.slide');
    var slideIndex = 0;
    
    // Show the first slide
    $(slides[slideIndex]).show();
    
    // Set interval to change slides
    setInterval(function() {
      // Hide the current slide
      $(slides[slideIndex]).hide();
      
      // Increment index or reset to 0
     slideIndex = (slideIndex + 1) % slides.length;

     console.log(slideIndex);
      
      // Show the next slide
      $(slides[slideIndex]).fadeIn(1000);
    }, 5000); 
})

