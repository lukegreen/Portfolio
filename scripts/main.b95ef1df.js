"use strict";$(document).ready(function(){new Waypoint({element:document.getElementById("main-title"),handler:function(a){"down"===a?$("#main-title").fadeOut("slow"):$("#main-title").fadeIn("slow")},offset:200}),new Waypoint({element:document.getElementById("main-title"),handler:function(a){"down"===a?$("#statement").css("visibility","visible").hide().fadeIn("slow"):$("#statement").fadeOut("slow")},offset:150}),new Waypoint({element:document.getElementById("skills"),handler:function(){$("#html, #css, #javascript, #angular, #photoshop, #illustrator, #blender, #indesign").addClass("full")},offset:800})});