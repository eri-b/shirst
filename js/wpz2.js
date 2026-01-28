var extraabout;

$(document).ready(function() {
  
    //HERE IS THE NEW SHIT
    
    var $main = $('h1.bc');

    var $nav = $('nav');
    var $cart = $('#cart');
    var $nav2 = $('#nav2');

    var $im1 = $('#shop h1:nth-of-type(1)');
    var $im2 = $('#shop h1:nth-of-type(2)');
    var $im3 = $('#shop h1:nth-of-type(3)');
    var $im4 = $('#shop h1:nth-of-type(4)');

    var $nava1 = $('nav li:nth-of-type(1)');
    var $nava2 = $('nav li:nth-of-type(2)');
    var $nava3 = $('nav li:nth-of-type(3)');
    var $nava4 = $('nav li:nth-of-type(4)');
    var $nava5 = $('nav li:nth-of-type(5)');

    var $w1 = $('#innerintro');

    var $concierge = $('#concierge');

    var $prodctn = $('#shop');
    var $shopheight =  $($prodctn).outerHeight(true);

    var $footer = $('footer');
    var $fixer = $('.fixer');


   

    function f3() {
        $nav.toggleClass( "hidden" );
        $main.addClass('addshadow');
    }

    function f4() {
        $nava1.toggleClass( "active" );
        $nava2.toggleClass( "active" );
    }
    function f5() {
        $nava2.toggleClass( "active" );
        $nava3.toggleClass( "active" );
    }
    function f6() {
        $nava3.toggleClass( "active" );
        $nava4.toggleClass( "active" );
    }

    function f7() {
        $nava4.toggleClass( "active" );
        $nava5.toggleClass( "active" );
    }

    function f8() {
        $cart.toggleClass( "hidden" );
    }




    

    $im2.waypoint({
        handler: function(direction) {
            f4();
        },
        offset:'80%'
    });

    $im3.waypoint({
        handler: function(direction) {
            f5();
        },
        offset:'80%'
    });

    $im4.waypoint({
        handler: function(direction) {
            f6();
        },
        offset:'80%'
    });

    $concierge.waypoint({
        handler: function(direction) {
            f7();
        },
        offset:'40%'
    });


    $footer.waypoint({
        handler: function(direction) {
            f3();
            
        },
        offset:'98%'
    });

    $footer.waypoint({
        handler: function(direction) {
            
            f8();
        },
        offset:'15%'
    });
});
