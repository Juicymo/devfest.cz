$(document).ready(function(){

	if ($.browser.msie && $.browser.version <= 9) {
      var formText = 'Váš e-mail';

      jQuery('.register form .text').val(formText);
  
      jQuery('.register form .text').click(function(){
          if(jQuery(this).val() == formText) {
              jQuery(this).val('');
          }
      });
  
      jQuery('.register form .text').blur(function(){
          if(jQuery(this).val() == '') {
              jQuery('.register form .text').val(formText);
          }
      });
    }

    setInterval(function() {
	    var tabs = $('#nav-tabs .nav-tabs > li'),
	        active = tabs.filter('.active'),
	        next = active.next('li'),
	        toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

	    toClick.trigger('click');
	}, 5000);
});