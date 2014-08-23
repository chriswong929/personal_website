/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
    if ($(window).width() < 768)
    	$('#click').click();
});

$(document).ready(function(){
	$('#typing').typed({
		strings: [" Hello World!^200"],
		typeSpeed: 50,
		cursorOn: false,
		callback: function(){
			$('#typing2').typed({
				strings: ["^750I am a student.", "I am a developer.", "I am a website designer.", "I am a computer engineer.^200"],
				stopNum: 6,
				backDelay: 500,
				cursorOn: false,
				callback: function(){
					$('.fade_in_txt').delay(100).fadeIn(4000);
				}
			});
		}
	});
	
});

