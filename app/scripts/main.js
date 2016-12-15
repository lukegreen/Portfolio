$(document).ready(function(){

  $('.skill-box').hover(function(){
    $(this).children('h2').fadeOut(500);

  }, function(){
    $(this).children('h2').fadeIn();
  });

  $('#application-button').on('click', function(){
    console.log('I heard a click.');
    var imageDisplay = $('#responsive-sample').css('display');
    if(imageDisplay != 'none') {
      $('#responsive-sample').fadeOut(200);
    } else {
      $('#responsive-sample').fadeIn(200);
    }
  });

})
