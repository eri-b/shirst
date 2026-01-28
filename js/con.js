// On Document Ready

$(document).ready(function () {


	$('button').click(function(){
	    $('button').fadeOut();
		setTimeout(function(){ 
			$('.service').removeClass('hidden');
		}, 410);
	    
		return false;
	});	
	
	


	var q1 = ".service li:nth-of-type(1)";
	var q2 = ".service li:nth-of-type(2)";
	var q3 = ".service li:nth-of-type(3)";
	var q4 = ".service li:nth-of-type(4)";
	
	var s1 =$(q1+" select");
	var s2 =$(q2+" select");
	var s3 =$(q3+" select");
	var s4 =$(q4+" select");

	var v1 = $(s1).val();
	$(s1).change(function() {
		var v1 = $(s1).val();
  		setTimeout(function(){ $(q2).removeClass('hidden');}, 200);
	});

	var v2 = $(s2).val();
	$(s2).change(function() {
		var v2 = $(s2).val();
  		setTimeout(function(){ $(q3).removeClass('hidden');}, 200);
	});

	var v3 = $(s3).val();
	$(s3).change(function() {
		var v3 = $(s3).val();
  		setTimeout(function(){ $(q4).removeClass('hidden');}, 200);
	});


	var v4 = $(s4).val();
	$(s4).change(function() {
		var v4 = $(s4).val();
  		setTimeout(function(){ $('#rec').removeClass('hidden');}, 200);
	});




	
	var ranprod = Math.floor((Math.random() * 16));

	var products = new Array(16);
	products[0]=  "http://store.shirst.com/product/denim-t-shirt-light-blue";
	products[1] = "http://store.shirst.com/product/denim-t-shirt-inside-out-dark";
	products[2] = "http://store.shirst.com/product/denim-t-shirt-inside-out-light";
	products[3] = "http://store.shirst.com/product/denim-t-shirt-dark-blue";
	products[4] = "http://store.shirst.com/product/denim-half-zip-light-blue";
	products[5] = "http://store.shirst.com/product/denim-half-zip-inside-out-dark";
	products[6] = "http://store.shirst.com/product/denim-half-zip-inside-out-light";
	products[7] = "http://store.shirst.com/product/denim-half-zip-dark-blue";
	products[8] = "http://store.shirst.com/product/denim-outer-shell-light-blue";
	products[9] = "http://store.shirst.com/product/denim-outer-shell-inside-out-light";
	products[10]=  "http://store.shirst.com/product/denim-outer-shell-dark-blue";
	products[11] = "http://store.shirst.com/product/denim-outer-shell-inside-out-dark";
	products[12] = "http://store.shirst.com/product/denim-sweater-inside-out-light";
	products[13] = "http://store.shirst.com/product/denim-sweater-inside-out-dark";
	products[14] = "http://store.shirst.com/product/denim-sweater-dark-blue";
	products[15] = "http://store.shirst.com/product/denim-sweater-light-blue";
	
	console.log(ranprod);
	$('#rec').click(function(){
		window.location.href = products[ranprod];
	});
});


$(window).resize(function () {
    //stuff to do on resize
});