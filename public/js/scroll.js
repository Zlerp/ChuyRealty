//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js



$(function() {    // same as $( document ).ready(function() {


  var width           = 720;
  var animationSpeed  = 1000;
  var pause           = 5000;
  var currentSlide    = 1;

  // cache DOM --> Only have to search page once.
  var $slider         = $('#slider');
  var $slideContainer = $slider.find('#slides');
  var $slides         = $slideContainer.find('.slide');
  var end             = ($slides.length * width);

  var interval;

  var clickHandler    = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

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

  });

  var mobCount = 1;

  $("section").mouseup(function(e)  {
    var subject = $(".menu");
      if(e.target.id != subject.attr('id')) {
        subject.animate({'margin-left':'-=275px'},150);
        $(".layer").fadeTo(150, 0.4);
        mobCount =1;
      }
    });

$( "#menuBurger" ).click(function(evt) {
  console.log(mobCount);
    $('#menuBurger').fadeTo(80, 1).fadeTo(140, 0.7);
    mobCount++;
    if (mobCount === 2){
    $(".menu").animate({'margin-left':'+=275px'},350);
    $(".layer").fadeTo(350, 0.8);
    $(".layer").fadeTo(350, 0.8);
    }else if (mobCount === 3) {
    $(".menu").animate({'margin-left':'-=275px'},350);
    $(".layer").fadeTo(350, 0.4);
    mobCount = 1;
  }
  evt.preventDefault();
  });


  $( ".menu a" ).bind(clickHandler, function() {
      $('.menu div').fadeTo(40, 1).fadeTo(140, 0.9);
      $(".menu").animate({'margin-left':'-=275px'},350);
      $(".layer").fadeTo(350, 0.4);
      mobCount = 1;
    });

      $( ".logo a" ).click(function() {
        $('.logo').fadeTo(40, 1.5).fadeTo(140, 0.7);
      });


  // GOOGLE MAPS



  var map;
  var markers;
  var mapName = 'CHUY REALTY GROUP';

  var contentString =
  '<p>'+ mapName + '</p>'
  // +
  // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  // 'sandstone rock formation in the southern part of the '+
  // 'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
  // 'south west of the nearest large town, Alice Springs; 450&#160;km '+
  // '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
  // 'features of the Uluru - Kata Tjuta National Park. Uluru is '+
  // 'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
  // 'Aboriginal people of the area. It has many springs, waterholes, '+
  // 'rock caves and ancient paintings. Uluru is listed as a World '+
  // 'Heritage Site.</p>'+
  // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
  // 'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
  // '(last visited June 22, 2009).</p>'
  ;

var marker;

  function initMap() {
    var myLatLng = {lat: 35.261264, lng: -79.025162};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom:8,
      center: myLatLng
    });

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }


google.maps.event.addDomListener(window, 'load', initMap);
marker.setMap(map);
});
