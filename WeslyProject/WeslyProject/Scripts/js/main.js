$(function () {
	'use strict';
	/*$(window).scroll(function () {
		var navbar = $('.navbar');
		// if($(window).scrollTop() >= navbar.height()){
		// 	navbar.addClass('scrolled');
		// }else{
		// 	navbar.removeClass('scrolled');
		// }

		$(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
	});*/
	// counter
	$.fn.jQuerySimpleCounter = function( options ) {
	  var settings = $.extend({
	    start:  0,
	    end:    100,
	    easing: 'swing',
	    complete: ''
	  }, options );

	  var thisElement = $(this);

	  $({count: settings.start}).animate({count: settings.end}, {
	    duration: settings.duration,
	    easing: settings.easing,
	    step: function() {
	      var mathCount = Math.ceil(this.count);
	      thisElement.text(mathCount);
	    },
	    complete: settings.complete
	  });
	};

	$('#number1').jQuerySimpleCounter({end: 999,duration: 4000});
	$('#number2').jQuerySimpleCounter({end: 1512,duration: 4700});
	$('#number3').jQuerySimpleCounter({end: 1756,duration: 4100});
	$('#number4').jQuerySimpleCounter({end: 101,duration: 4450});

	

});



// text typing 
	var typeText       = '#type-text',         // Place Of P Elements Fore Typing
		typingSpeed    = 150,                  // Typing Speed
		typingDelay    = 1000,                 // Delay After Type One P Element
		backSpaceSpeed = 50,                   // Speed Of Delete The Characters Of The Text
		typingPlace    = '#typing-place';      // Place Of Typing
	Typing(typeText,typingSpeed,typingDelay,backSpaceSpeed,typingPlace);
	
	function Typing(typeText,typingSpeed,typingDelay,backSpaceSpeed,typingPlace){
		var x = $(typeText).children("p:nth-child(1)"),i =0,j=2,delay=0,nb=0;
		var mytext = '';
		var typing = setTimeout(myf,typingSpeed);
		function myf(){
			var y = x.html();
			mytext += y.charAt(i);
			$(typingPlace).html(mytext);
			i++;
			if(i==y.length){
				i=0;
				x = $(typeText).children('p:nth-child('+j+')');
				j++;
				mytext='';
				if(j==$(typeText).children('p').length+1){
					j=1;
				}
				nb=y.length;
				setTimeout(backspace,typingDelay);
				function backspace(){
					var backing = '';
					for (var z = 0 ; z<=nb-1;z++)
						backing += y[z]					
					nb -=1;
					$(typingPlace).html(backing);
					if(backing == ''){
					}else{
						setTimeout(backspace,backSpaceSpeed);
					}
				}
				delay=backSpaceSpeed*y.length-1 + typingDelay;
			}
		typing = setTimeout(myf,typingSpeed+delay);
		delay = 0;
		}
		$(typeText ).before("<style>"+typingPlace+":after{display:inline-block;content:'|'}"+typeText+"{display:none;}</style>");
	}




//testimonials 
    $(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 2
          }
        }
      })
    })




    //map 
    	function initialize() {
		  var styles = [
		    { stylers: [{ saturation: -100 }, { gamma: 1 }] },
		    { featureType: "water", stylers: [{ lightness: -12 }] }
		  ];
		  var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
		  var latlng = new google.maps.LatLng(30.0694439,31.244859899999938);

		  var myOptions = {
		    scrollwheel: false,
		    zoom: 13,
		    center: latlng,
		    mapTypeControlOptions: {
		      mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
		    }
		  };

		  var map = new google.maps.Map(
		    document.getElementById("map-canvas"),
		    myOptions
		  );
		  map.mapTypes.set("map_style", styledMap);
		  map.setMapTypeId("map_style");
		  var image = {
		    url: "/img/marker.png",
		    size: new google.maps.Size(40, 42),
		    origin: new google.maps.Point(0, 0),
		    anchor: new google.maps.Point(20, 42)
		  };
		  var myMarker = new google.maps.Marker({
		    position: latlng,
		    map: map,
		    icon: image,
		    clickable: true,
		    title: "My Location"
		  });
		  myMarker.info = new google.maps.InfoWindow({
		    content:
		      "<b>Wesly Law Office</b><br>36 Shoubra Street<br>"
		  });
		  google.maps.event.addListener(myMarker, "click", function() {
		    myMarker.info.open(map, myMarker);
		  });
		}
		google.maps.event.addDomListener(window, "load", initialize);
