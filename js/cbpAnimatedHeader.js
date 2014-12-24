/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		// Use this to change when the header toggles
		// 565 for toronto_at_night_black_and_white_edit_by_falcon912-d5nkmrv
		// changeHeaderOn = 565;
		changeHeaderOn=$(window).height()-80;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			// $('.navbar-default').css("background-color", "rgba(255,255,255,0.8)");
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			// $('.navbar-default').css("background-color", "transparent");
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
