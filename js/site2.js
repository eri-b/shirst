

function disablewp() {
    var $windowWidth = $(window).width();
    	if ($windowWidth >= 768){
			Waypoint.enableAll();
		}
		if ($windowWidth < 768){
			Waypoint.disableAll();
		}
	}

disablewp();


function loadContent(){
	if(window.location.hash) {
		$('#shop').addClass('visiblehash');
	} else {
  		$('#shop').addClass('visible');
	}
}


// On Window Load

$(window).load(function() {
	  	$('body').removeClass('i-tran1');
	  	setTimeout(function(){ $('body').removeClass('i-tran2'); }, 400);
	  	setTimeout(function(){ $('body').removeClass('i-tran3'); }, 1000);
	
	  	//Product Images After Load
  		// setTimeout(function(){ $('#shop').addClass('visible'); }, 200);
  		setTimeout(loadContent, 100);

  		var $windowWidth = $(window).width();
	    if ($windowWidth >= 768){
	    setTimeout(function(){ Waypoint.refreshAll(); }, 600);
		}
	   	
	});


// On Document Ready

$(document).ready(function () {
	

	//Product Images if windowload takes too long
  	setTimeout(loadContent, 8000);

	$('button').click(function(){
	    $('button').fadeOut();
		setTimeout(function(){ 
			$('.service').addClass('visible');
		}, 410);
	    
		return false;
	});	


	// To Top
	$('#top').click(function(){
	    $('html, body').animate({
				        scrollTop: $('body').offset().top
				    }, 1000);
		return false;
	});

	$('#about').click(function(){
	    $('.fixer').show();
		$('#concierge').addClass('showfooter');
		$('#intro h1').addClass('addshadow');
		setTimeout(function(){ 
			$('html, body').animate({
				        scrollTop: $('.fixer').offset().top
				    }, 1200);
		}, 410);
	    
		return false;
	});


	$('nav a').click(function(){
		var atb = $.attr(this, 'href');
		if($.attr(this, 'href') == '#concierge'){
			var pos = $( $.attr(this, 'href') ).offset().top;
		}
		else{
			var pos = $( $.attr(this, 'href') ).offset().top - 100;
		}
		
		$('html, body').animate({
    	scrollTop: pos
		}, 700);
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