"use strict";$(document).ready(function(){$(".nav li").on("click",function(){$(".nav li").removeClass("active"),$(this).addClass("active")}),$(".skill-box").hover(function(){$(this).children("h2").fadeOut(500)},function(){$(this).children("h2").fadeIn()}),$("#application-button").on("click",function(){console.log("I heard a click.");var a=$("#responsive-sample").css("display");"none"!=a?$("#responsive-sample").fadeOut(200):$("#responsive-sample").fadeIn(200)}),$("#ui-button").on("click",function(){console.log("I heard a click.");var a=$("#ui-sample").css("display");"none"!=a?$("#ui-sample").fadeOut(200):$("#ui-sample").fadeIn(200)}),$("#illustration-button").on("click",function(){console.log("I heard a click.");var a=$("#illustration-sample").css("display");"none"!=a?$("#illustration-sample").fadeOut(200):$("#illustration-sample").fadeIn(200)}),$("#three-d-button").on("click",function(){console.log("I heard a click.");var a=$("#three-d-sample").css("display");"none"!=a?$("#three-d-sample").fadeOut(200):$("#three-d-sample").fadeIn(200)})});