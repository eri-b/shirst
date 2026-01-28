function fixit() {
	var $windowWidth = $(window).width();
	var $windowHeight = $(window).height();
	if (($windowWidth > 1050)&& ($windowHeight > 700)){
		var left = $('.details').offset().left;
		var top = $('.details').offset().top;
		setTimeout(function(){ $(".details").addClass('fixside'); }, 50);
		setTimeout(function(){ $(".details").css("left", left); }, 50);
		setTimeout(function(){ $(".details").css("top", top); }, 50);
	}
}

function unfixit(){
	$(".details").removeClass('fixside');
}


$("#more_products").click(
	function () {
		$("#more_products div").show();
		$("#more_products").removeClass('cur');
	}
);

$("#more_products2").click(
	function () {
		$("#more_products2 div").show();
		$("#more_products2").removeClass('cur');
	}
);

//add break after 2 words
function addbreak2(){
	$(".details > h1").html($(".details > h1").text().replace(/([a-zA-Z]+[.,]? ){2}/, function(x) { return x + "<br>"; }));
}

//add break after 3 words
function addbreak3(){
	$(".details > h1").html($(".details > h1").text().replace(/([a-zA-Z]+[.,]? ){3}/, function(x) { return x + "<br>"; }));
}

//add break after 3 words
function addbreaktee(){
	$(".details > h1").html($(".details > h1").text().replace(/([a-zA-Z\-]+[.,]? ){2}/, function(x) { return x + "<br>"; }));
}

if ($('#more_products').hasClass('sweater')){
	addbreak2();
}

if ($('#more_products').hasClass('halfzip')){
	addbreak3();
}

if ($('#more_products').hasClass('shell')){
	addbreak3();
}

if ($('#more_products').hasClass('tee')){
	addbreaktee();
}

$(window).load(function () {
	fixit();
});


$(window).resize(function () {
	unfixit();
 	setTimeout(function(){ fixit(); }, 50);
});