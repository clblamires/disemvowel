/*
disemvowel.js

A simple jQuery plugin to remove vowels from the selected jQuery object

copyright (c) 2016 Casey Blamires

MIT license
http://opensource.org/licenses/MIT
*/
(function($){
	$.fn.disemvowel = function( options ){
		settings = $.extend({
			replacement: ""
		}, options);
		return this.each( function(){
			var text = $(this).text();
			text = text.replace( /[aeiou]/gi , settings.replacement);
			$(this).text( text );
		});
	}
})(jQuery);