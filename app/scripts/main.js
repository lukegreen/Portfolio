$(document).ready(function(){

  //$("#developer, #artist, #geek").addClass("fadedIn");
  //console.log("I am faded");

  var waypoint1 = new Waypoint({
  element: document.getElementById('main-title'),
  handler: function(direction) {
    if (direction === 'down') {
      $('#main-title').fadeOut('slow');
 }
 else {
   $('#main-title').fadeIn('slow');
 }
  },
  offset: 200
});

  /*var paragraphWaypoint = new Waypoint ({
    element: document.getElementById('headline'),
    handler: function(direction) {
      if (direction === 'down') {
        $('.story-item').css('visibility','visible').hide().fadeIn('slow');
      } else {
        $('.story-item').fadeOut('slow');
      }
    },
    offset: 100
  });

  var skillsWaypoint = new Waypoint ({
    element: document.getElementById('skills-section'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#html, #css, #javascript, #angular').addClass("full");
        console.log('I am full');
      }
    },
    offset: 500
  }); */

})
