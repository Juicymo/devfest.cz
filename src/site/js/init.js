$(document).ready(function(){

	setInterval(function() {
    var tabs = $('#nav-tabs .nav-tabs > li'),
        active = tabs.filter('.active'),
        next = active.next('li'),
        toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

    toClick.trigger('click');
  }, 5000);

  if ($.browser.msie && $.browser.version <= 9) {
      var formText = 'Váš e-mail';

      $('.register form .text').val(formText);
  
      $('.register form .text').click(function(){
          if($(this).val() == formText) {
              $(this).val('');
          }
      });
  
      $('.register form .text').blur(function(){
          if($(this).val() == '') {
              $('.register form .text').val(formText);
          }
      });
    }
/*
  if ($('.homepage').size()) {
    var spinnerDiv, spinnerInterval;   
    var spinnerVisible = false;

    spinnerDiv = document.createElement('div');
    $(spinnerDiv).attr('class', 'spinner');
    $('.register form').append(spinnerDiv);

    $('.register form').submit(function(){
    
      if (!spinnerVisible) {
        $(spinnerDiv).show();        
        spinnerVisible = true;
        spinnerInterval = setInterval(function() {
          if (($('.register form .mc-field-group .mce_inline_error').size() > 0)
            || !$('.register form #mce-responses #mce-error-response:empty').size()
            || !$('.register form #mce-responses #mce-success-response:empty').size()) {
            $(spinnerDiv).hide();
            spinnerVisible = false;
            clearInterval(spinnerInterval);
          }
        }, 500);
      }     
    });   
  }*/
});