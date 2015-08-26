//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js



$(function() {    // same as $( document ).ready(function() {


  var width = 720;
  var animationSpeed = 1000;
  var pause = 5000;
  var currentSlide = 1;

  // cache DOM  --> Only have to search page once.
  var $slider = $('#slider');
  var $slideContainer = $slider.find('#slides');
  var $slides = $slideContainer.find('.slide');

  var end = ($slides.length * width);

  var interval;

  function startSlider(){
    interval = setInterval(function() {
      // $('selector').animate(movement, time, callback);
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
        currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
          }
        });
    }, pause);
  }

  function pauseSlider(){
    clearInterval(interval);
  }

  $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

  startSlider();

  $( "#next" ).click(function() {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
      currentSlide++;
      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
        }
    }, 0);
  });

  $( "#prev" ).click(function() {
    // if (currentSlide > 1) {
    $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function() {
      currentSlide--;
      console.log(currentSlide);
      if (currentSlide === 0) {
        console.log("working");
        currentSlide = $slides.length;
        $slideContainer.css('margin-left', 4560);
        }
      }, 0);
    // }
  });

    //setInterval
    //animate



  });
