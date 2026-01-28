/*!
 * jQuery wmuSlider v2.1
 * 
 * Copyright (c) 2011 Brice Lechatellier
 * http://brice.lechatellier.com/
 *
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */

 $("#cart_discount_code").attr("placeholder", "Promo Code").val("").focus().blur();
 
function resizeSlideshow() {
    $("#slideshow:visible article").each(function() {
        var e = $(this),
            t = e.find("img"),
            n = Math.max($(window).height() - $("body > header").outerHeight(), 450);
        e.css({
            height: n
        }), t.outerWidth() > $(window).outerWidth() ? t.css({
            marginLeft: ($(window).outerWidth() - t.outerWidth()) / 2
        }) : t.css({
            marginLeft: 0
        }), $("#slideshow").css({
            height: n
        })
    })
}

function changeImage(e) {
    var t = $("#thumbs ul li"),
        n = t.eq(e % t.length);
    t.removeClass("selected"), n.addClass("selected"), $(".primary_image").attr("src", n.find("a").attr("href"))
}

function showCart() {
    var e = $("<div>", {
        "class": "overlay"
    });
    e.load("/cart .cart-wrapper", function() {
        $("body").addClass(""), $("body > footer").before(e), e.fadeIn()
    })
}

function updateCart() {
    var e = $(".content, .overlay").last();
    e.load("/cart .cart-wrapper")
}(function(e) {
    e.fn.wmuSlider = function(t) {
        var n = {
                animation: "fade",
                animationDuration: 600,
                slideshow: !0,
                slideshowSpeed: 7e3,
                slideToStart: 0,
                navigationControl: !0,
                paginationControl: !0,
                previousText: "Previous",
                nextText: "Next",
                touch: !1,
                slide: "article",
                items: 1
            },
            t = e.extend(n, t);
        return this.each(function() {
            var n = e(this),
                r = t.slideToStart,
                i = n.find(".wmuSliderWrapper"),
                s = n.find(t.slide),
                o = s.length,
                u, a, f, l = function(u, l, c) {
                    if (f) return !1;
                    f = !0, r = u;
                    var h = e(s[u]);
                    n.css({
                        height: h.innerHeight()
                    }), t.animation == "fade" ? (s.css({
                        position: "absolute",
                        opacity: 0
                    }), h.css("position", "relative"), h.animate({
                        opacity: 1
                    }, t.animationDuration, function() {
                        f = !1
                    })) : t.animation == "slide" && (l ? u == 0 ? i.animate({
                        marginLeft: -n.width() / t.items * o
                    }, t.animationDuration, function() {
                        i.css("marginLeft", 0), f = !1
                    }) : (c || i.css("marginLeft", -n.width() / t.items * o), i.animate({
                        marginLeft: -n.width() / t.items * u
                    }, t.animationDuration, function() {
                        f = !1
                    })) : i.animate({
                        marginLeft: -n.width() / t.items * u
                    }, t.animationDuration, function() {
                        f = !1
                    })), a && a.find("a").each(function(t) {
                        t == u ? e(this).addClass("wmuActive") : e(this).removeClass("wmuActive")
                    }), n.trigger("slideLoaded", u)
                };
            if (t.navigationControl) {
                var c = e('<a class="wmuSliderPrev">' + t.previousText + "</a>");
                c.click(function(e) {
                    e.preventDefault(), clearTimeout(u), r == 0 ? l(o - 1, !0) : l(r - 1)
                }), n.append(c);
                var h = e('<a class="wmuSliderNext">' + t.nextText + "</a>");
                h.click(function(e) {
                    e.preventDefault(), clearTimeout(u), r + 1 == o ? l(0, !0) : l(r + 1)
                }), n.append(h)
            }
            t.paginationControl && (a = e('<ul class="wmuSliderPagination"></ul>'), e.each(s, function(e) {
                a.append('<li><a href="#">' + e + "</a></li>"), a.find("a:eq(" + e + ")").click(function(t) {
                    t.preventDefault(), clearTimeout(u), l(e)
                })
            }), n.append(a));
            if (t.slideshow) {
                var p = function() {
                    r + 1 < o ? l(r + 1) : l(0, !0), u = setTimeout(p, t.slideshowSpeed)
                };
                u = setTimeout(p, t.slideshowSpeed)
            }
            var d = function() {
                    var o = e(s[r]);
                    t.animation == "slide" && (s.css({
                        width: n.width() / t.items
                    }), i.css({
                        marginLeft: -n.width() / t.items * r,
                        width: n.width() * s.length
                    }))
                },
                v = function(e, s, a, f) {
                    clearTimeout(u), s != "move" || a != "left" && a != "right" ? s == "cancel" ? a == "right" && r == 0 ? i.animate({
                        marginLeft: -o * n.width() / t.items
                    }, t.animationDuration) : i.animate({
                        marginLeft: -r * n.width() / t.items
                    }, t.animationDuration) : s == "end" && (a == "right" ? r == 0 ? l(o - 1, !0, !0) : l(r - 1) : a == "left" ? r + 1 == o ? l(0, !0) : l(r + 1) : i.animate({
                        marginLeft: -r * n.width() / t.items
                    }, t.animationDuration)) : a == "right" ? r == 0 ? i.css("marginLeft", -o * n.width() / t.items + f) : i.css("marginLeft", -r * n.width() / t.items + f) : a == "left" && i.css("marginLeft", -r * n.width() / t.items - f)
                };
            t.touch && t.animation == "slide" && (e.isFunction(e.fn.swipe) || e.ajax({
                url: "jquery.touchSwipe.min.js",
                async: !1
            }), e.isFunction(e.fn.swipe) && n.swipe({
                triggerOnTouchEnd: !1,
                swipeStatus: v,
                allowPageScroll: "vertical"
            }));
            var m = function() {
                var u = e(s[r]),
                    a = u.find("img");
                a.load(function() {
                    i.show(), n.animate({
                        height: u.innerHeight()
                    })
                });
                if (t.animation == "fade") s.css({
                    position: "absolute",
                    width: "100%",
                    opacity: 0
                }), e(s[r]).css("position", "relative");
                else if (t.animation == "slide") {
                    t.items > o && (t.items = o), s.css("float", "left"), s.each(function(t) {
                        var n = e(this);
                        n.attr("data-index", t)
                    });
                    for (var f = 0; f < t.items; f++) i.append(e(s[f]).clone());
                    s = n.find(t.slide)
                }
                d(), n.trigger("hasLoaded"), l(r)
            };
            m(), e(window).resize(d), n.bind("loadSlide", function(e, t) {
                clearTimeout(u), l(t)
            })
        })
    }
})(jQuery), API.onError = function(e) {
    var t = $("<ul>", {
            "class": "errors"
        }),
        n = $("#cart_form .header"),
        r = $("#product_form");
    $.each(e, function(e, n) {
        t.append($("<li>").html(n))
    }), n.length > 0 ? (n.find(".errors").hide(), n.prepend(t), $(".cart-wrapper").scrollTop(0)) : r.length > 0 && (r.find(".errors").hide(), r.prepend(t))
}, $(window).on("resize", function() {
    if ($(window).width() <= 690) {
        var e = $("header .logo").outerHeight() + 20;
        $("header .cart").css({
            paddingTop: e
        }), $("header .light_cart").css({
            top: e
        })
    } else $("header .cart").removeAttr("style"), $("header .light_cart").removeAttr("style");
    resizeSlideshow()
}), $(document).ready(function() {
    var e = $(this);
    resizeSlideshow(), $(".wmuSliderWrapper").children().length > 1 && $(".example1").wmuSlider({
        animation: "slide",
        slideshow: !0,
        slideshowSpeed: 4e3,
        navigationControl: !0,
        paginationControl: !0
    }), e.on("click", "aside > a", function(e) {
        e.preventDefault(), $("aside").toggleClass("expand")
    }).on("click", ".more", function(e) {
        e.preventDefault();
        var t = $(this),
            n = parseInt(t.attr("data-current-page")),
            r = n + 1,
            i = parseInt(t.attr("data-total-pages"));
        $.get(t.attr("href"), function(e) {
            var t = $(e).find(".product_list li");
            $(".product_list ul").append(t.fadeIn())
        }), r == i ? t.hide() : (t.attr("href", t.attr("href").replace(/page=\d+/, "page=" + (r + 1))), t.attr("data-current-page", r))
    }).on("click", ".remove", function(e) {
        e.preventDefault(), Cart.removeItem($(this).data("item-id"), function(e) {
            $("header .cart a > span").html(Format.money(e.total, !0, !0)), updateCart()
        })
    }).on("click", "[data-show-cart]", function(e) {
        // e.preventDefault(), showCart()
    }).on("click", "body:not(.cart) .close_overlay a", function(e) {
        e.preventDefault(), $(this).closest(".overlay").fadeOut(function() {
            $(this).remove(), $("body").removeClass("no-scroll")
        })
    }).on("click", "#thumbs a", function(e) {
        e.preventDefault(), changeImage($("#thumbs ul li").index($(this).closest("li")))
    }).on("click", "#prev, #next", function(e) {
        e.preventDefault();
        var t = $("#thumbs ul li.selected").index();
        $(e.target).attr("id") == "next" ? t++ : t--, changeImage(t)
    }).on("click", "[data-add-to-cart]", function(e) {
        e.preventDefault();
        var t = $(this),
            n = $("#option"),
            r = $("#product_qty");
        Cart.addItem(n.val(), r.val(), function(e) {
            $("#product_form .errors").remove(), $("header .cart a > span").html(Format.money(e.total, !0, !0)), t.text("Added!"), setTimeout(function() {
                t.text("Add to cart")
            }, 1e3), $("header .cart").append($("<div class='light_cart'></div>").append($("<div class='green_cart'></div>"))), $(window).trigger("resize"), $(".green_cart").animate({
                height: "60px"
            }, "slow"), setTimeout(function() {
                $(".green_cart").fadeOut("slow", function() {
                    $(this).parent().remove()
                })
            }, 1500)
        })
    }).on("click", ".cart-wrapper #update", function(e) {
        e.preventDefault(), Cart.updateFromForm("cart_form", function(e) {
            $("header .cart a > span").html(Format.money(e.total, !0, !0)), updateCart()
        })
    })
}), $(document).ready(function() {
    var e = $(".search_bar"),
        t = e.find('input[type="submit"]'),
        n = e.find('input[type="search"]'),
        r = e.find("img");
    t.hide(), n.on("click", function() {
        t.show(), e.addClass("search_bar_border"), r.addClass("imgAdd")
    }), n.on("focusout", function() {
        setTimeout(function() {
            t.hide(), e.removeClass("search_bar_border"), r.removeClass("imgAdd"), this.value == "" && (this.value = "Search Products...")
        }, 200)
    }), t.on("click", function() {
        t.hide(), e.removeClass("search_bar_border"), r.removeClass("imgAdd")
    }), n.on("focus", function() {
        this.value == "Search Products..." && (this.value = "")
    }), n.on("focusout", function() {
        this.value == "" && (this.value = "Search Products...")
    }), $(function() {
        $("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                e = e.length ? e : $("[name=" + this.hash.slice(1) + "]");
                if (e.length) return $("html,body").animate({
                    scrollTop: e.offset().top
                }, 1e3), !1
            }
        })
    }), $(function() {
        $(".categories a").each(function() {
            $(this).attr("href") == window.location.pathname && $(this).parent().addClass("current")
        })
    })
});