$(document).ready(function(){
	setInterval(function() {
	    var tabs = $('#nav-tabs .nav-tabs > li'),
	        active = tabs.filter('.active'),
	        next = active.next('li'),
	        toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

	    toClick.trigger('click');
	}, 5000);
});