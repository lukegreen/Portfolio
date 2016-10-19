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

  var paragraphWaypoint = new Waypoint ({
    element: document.getElementById('main-title'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#statement').css('visibility','visible').hide().fadeIn('slow');
      } else {
        $('#statement').fadeOut('slow');
      }
    },
    offset: 150
  });

  var skillsWaypoint = new Waypoint ({
    element: document.getElementById('skills'),
    handler: function(direction) {
      if (direction === 'down') {
        $('#html, #css, #javascript, #angular, #photoshop, #illustrator, #blender, #indesign').addClass("full");
        console.log('I am full');
      }
    },
    offset: 590
  });

})
