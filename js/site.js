

function disablewp() {
    var $windowWidth = $(window).width();
    	if ($windowWidth >= 768){
			Waypoint.enableAll();
		}
		if ($windowWidth < 768){
			Waypoint.disableAll();
		}
	}



// On Window Load

$(window).load(function() {
	  	/*$('body').removeClass('i-tran1');
	  	setTimeout(function(){ $('body').removeClass('i-tran2'); }, 400);
	  	setTimeout(function(){ $('#h2a').addClass('newspeed'); }, 1400);
	  	setTimeout(function(){ $('body').removeClass('i-tran3'); }, 1000);*/
	
	  	
  		
	});


// On Document Ready
$(document).ready(function () {

	//Disable WP on Mobile
	disablewp();

	$('#intro').waitForImages(function() {
		// $('.loading').fadeOut();
    	$('body').removeClass('i-tran1');
	  	setTimeout(function(){ $('body').removeClass('i-tran2'); }, 200);
	  	setTimeout(function(){ $('#h2a').addClass('newspeed'); }, 1200);
	  	setTimeout(function(){ $('body').removeClass('i-tran3'); }, 800);
	});

	// To Top
	$('#top').click(function(){
	    $('html, body').animate({
				        scrollTop: $('body').offset().top
				    }, 1000);
		return false;
	});

	$('#top2').click(function(){
	    $('html, body').animate({
				        scrollTop: $('body').offset().top
				    }, 1000);
		return false;
	});

	// 
	$('#about').click(function(){
	    $('.fixer').show();
		// $('.shop-ctn').addClass('showfooter');
		// $('#intro h1').addClass('addshadow');
		// $('#intro h3').addClass('addshadow');
		setTimeout(function(){ 
			$('html, body').animate({
				        scrollTop: $('.fixer').offset().top
				    }, 1200);
		}, 410);
	    
		return false;
	});

	
	$('#h2a').on('click touchstart',function(){
		$('html, body').animate({
    	scrollTop: $('#im1').offset().top - 0
		}, 800);
		return false;
	});

	


	// Date Section
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	var songs = new Array(7);
	songs[0]=  "https://www.youtube.com/watch?v=8CdoYdYYOuU";
	songs[1] = "https://www.youtube.com/watch?v=2x9mfgUsIis";
	songs[2] = "https://www.youtube.com/watch?v=2x9mfgUsIis";
	songs[3] = "https://www.youtube.com/watch?v=2x9mfgUsIis";
	songs[4] = "https://www.youtube.com/watch?v=2x9mfgUsIis";
	songs[5] = "https://www.youtube.com/watch?v=2x9mfgUsIis";
	songs[6] = "https://www.youtube.com/watch?v=2x9mfgUsIis";

	var n = weekday[d.getDay()];
	var y = songs[d.getDay()];
	$("#day").html(n);
	



	$('nav a').click(function(){
		$('html, body').animate({
    	scrollTop: $( $.attr(this, 'href') ).offset().top - 0
		}, 1000);
		return false;
	});

	//Fancybox
	// $("a#nycmap").fancybox();

	$("a#nycmap").fancybox({
			'padding'		: 0,
			'transitionIn'	: 'fade',
			'transitionOut'	: 'fade'
		});

});


$(window).resize(function () {
    //stuff to do on resize
    disablewp();
});