$(document).ready(function(){

  /*Change active class for menu items*/

  $('.nav li').on('click', function(){
    $('.nav li').removeClass('active');
    $(this).addClass('active');
  });

  /*Skill box interactivity*/

  $('.skill-box').hover(function(){
    $(this).children('h2').fadeOut(500);

  }, function(){
    $(this).children('h2').fadeIn();
  });

  /*Featurette buttons*/

  $('#application-button').on('click', function(){
    console.log('I heard a click.');
    var imageDisplay = $('#responsive-sample').css('display');
    if(imageDisplay != 'none') {
      $('#responsive-sample').fadeOut(200);
    } else {
      $('#responsive-sample').fadeIn(200);
    }
  });

  $('#ui-button').on('click', function(){
    console.log('I heard a click.');
    var imageDisplay = $('#ui-sample').css('display');
    if(imageDisplay != 'none') {
      $('#ui-sample').fadeOut(200);
    } else {
      $('#ui-sample').fadeIn(200);
    }
  });

  $('#illustration-button').on('click', function(){
    console.log('I heard a click.');
    var imageDisplay = $('#illustration-sample').css('display');
    if(imageDisplay != 'none') {
      $('#illustration-sample').fadeOut(200);
    } else {
      $('#illustration-sample').fadeIn(200);
    }
  });

  $('#three-d-button').on('click', function(){
    console.log('I heard a click.');
    var imageDisplay = $('#three-d-sample').css('display');
    if(imageDisplay != 'none') {
      $('#three-d-sample').fadeOut(200);
    } else {
      $('#three-d-sample').fadeIn(200);
    }
  });

})
