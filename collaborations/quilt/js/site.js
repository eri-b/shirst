
var li = $('ul li');

for (var i = 0; i < li.length; i++) {
	// there are 16^6 possible colors (16777215)
	var randomColor = Math.floor(Math.random()*16777215).toString(16); // converts number to hex
	randomColor = "#"+randomColor;
	$('ul li:nth-child('+(i+1)+')').css('background-color', randomColor);
	$('ul li:nth-child('+(i+1)+')').css('border-color', randomColor);
};

$(window).on('load', function(){ 
	$('body').addClass('loaded');
});

$('#over').on('click', function(){ 
	$('body').addClass('success');
});

$('#under').on('click', function(){ 
	$('body').addClass('failure');
});

$('#unlock').on('click', function(){ 
	$('body').addClass('showEverything');
});