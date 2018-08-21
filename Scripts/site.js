
$(document).ready(function () {
    $('#Home').addClass('active');
    $('.page-scroll').on('click', function () {
        var area = $('.area');
        var clicked = $(this).attr('id');
        $('.page-scroll').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $.ajax({
            url: clicked + ".html",
            context: document.body,
            success: function (result) {
                //we have the data now
                $(area).fadeOut(700, function () {
                    //populate the div with whatever was returned from the ajax call
                    $(area).html(result).fadeIn(700);
                }); 
                //$(area).html(result);
            },
            error: function () {
                console.log("ERROR");
            }
        });
    });



    //jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 40) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    var cbpAnimatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('.navbar-default'),
            didScroll = false,
            changeHeaderOn = 70;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 100);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                classie.add(header, 'navbar-shrink');
            }
            else {
                classie.remove(header, 'navbar-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();

    $('#mySkills a:last').tab('show');
    $('#mySkills a').on("click",function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});