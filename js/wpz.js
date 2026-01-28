var extraabout;

$(document).ready(function() {
  
    //HERE IS THE NEW SHIT
    
    var $main = $('#intro h1');

    var $text1 = $('#h2a');
    var $h2height =  $($text1).outerHeight(true);
    
    var $text2 = $('#h3a');

    var $nav = $('nav');
    var $navp = $('.navp');
    var $nav2 = $('#nav2');

    var $im1 = $('#im1 img');
    var $im2 = $('#im2 img');
    var $im3 = $('#im3 img');
    var $im4 = $('#im4 img');

    var $nava1 = $('nav li:nth-of-type(1)');
    var $nava2 = $('nav li:nth-of-type(2)');
    var $nava3 = $('nav li:nth-of-type(3)');
    var $nava4 = $('nav li:nth-of-type(4)');
    var $nava5 = $('nav li:nth-of-type(5)');

    var $w1 = $('#innerintro');

    var $shop = $('.shop-ctn');


    var $footer = $('footer');
    var $fixer = $('.fixer');


    function f1() {
        $text1.toggleClass( "fixed" );
    }
    
    function f2() {
        $text1.toggleClass( "o-change hidden" );
        $main.toggleClass( "o-change pos2" );
        $text2.toggleClass( "hidden" );
    }

    function f3() {
        $nav.toggleClass( "hidden" );
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
        $navp.toggleClass( "hidden" );
    }


    $w1.waypoint({
        handler: function(direction) {
         f1();
        },
        offset: function() {
            return - Waypoint.viewportHeight() + 100 + $h2height
        }
    });


    $im1.waypoint({
        handler: function(direction) {
            f2();
        },
        offset:'150'
    });

    $im1.waypoint({
        handler: function(direction) {
            f3();
        },
        offset:'50'
    });

    $im2.waypoint({
        handler: function(direction) {
            f4();
        },
        offset:'50%'
    });

    $im3.waypoint({
        handler: function(direction) {
            f5();
        },
        offset:'50%'
    });

    $im4.waypoint({
        handler: function(direction) {
            f6();
        },
        offset:'50%'
    });

    $shop.waypoint({
        handler: function(direction) {
            f7();
        },
        offset:'40%'
    });

    $shop.waypoint({
        handler: function(direction) {
            f8();
        },
        offset:'20%'
    });

    $footer.waypoint({
        handler: function(direction) {
            f3();
            f8();
        },
        offset:'98%'
    });
    
});
