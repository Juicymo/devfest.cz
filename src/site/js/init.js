function manageSpinner() {
  if (!spinnerVisible) {
    $(spinnerDiv).show();        
    spinnerVisible = true;
    spinnerInterval = setInterval(function() {
      if ($('.register form .mc-field-group .mce_inline_error').size() > 0) { //simple inline error
        hideSpinner();
      }
    }, 750);
  }   
}

function hideSpinner() {
  if (spinnerVisible) {
    $(spinnerDiv).hide();
    spinnerVisible = false;
    clearInterval(spinnerInterval);
  }    
}

var spinnerDiv, spinnerInterval;   
var spinnerVisible = false;

$(document).ready(function(){
  //create spinner element
  spinnerDiv = document.createElement('div');
  $(spinnerDiv).attr('class', 'spinner');
  $('.register form').append(spinnerDiv);

  //auto rotating tabs
	setInterval(function() {
    var tabs = $('#nav-tabs .nav-tabs > li'),
        active = tabs.filter('.active'),
        next = active.next('li'),
        toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

    toClick.trigger('click');
  }, 5000);

  //text "Vas e-mail" for input in IEs, they does not support HTML5 placeholder attribute
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
});