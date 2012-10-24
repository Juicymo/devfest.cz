$(document).ready(function(){
  //auto rotating tabs
	setInterval(function() {
    var tabs = $('#nav-tabs .nav-tabs > li'),
        active = tabs.filter('.active'),
        next = active.next('li'),
        toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

    toClick.trigger('click');
  }, 15000);

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

  /* Countdown */
  var dateString = "November 10, 2012 08:30:00";
  var newDate = new Date(dateString); 
  $('#countdown').countdown({until: newDate}); 

  /* Carousel */
  $("#carousel-main").carousel({ 
    loop: true,
    autoSlide: true,
    autoSlideInterval: 5000
  });

  $("#lifestream").lifestream({
    list:[
      {
        service: "facebook_page",
        user: "156528027719650"
      },
      {
        service: "twitter",
        user: "gughackathon"
      }
    ]
  });
});