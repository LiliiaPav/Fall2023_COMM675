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



    // Mobile version open menu and change to X
    $(".menu").click(function(){
      $(this).toggleClass("fa-times");
      $(".navigation").toggleClass("active");
  })


// Open submenu with fade
  $( ".submenu" ).hover(function() {     
    $(this).find('ul').stop().fadeToggle(10);
 });

 // Send alert on the button click
 $( "#submitform-review" ).click(function() {     
  alert ("Thank you for your Review");
});
 
$( "#submitForm" ).click(function() {     
  alert ("Thank you for contacting us. We will get back to you shortly ");
});



})

