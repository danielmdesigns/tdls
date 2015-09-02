$(document).ready(function(){
	"use strict";
//alert if input left blank
$('button').click(function(ev){
   if($('input').val() === ''){
	   ev.stopImmediatePropagation();
      alert('Sorry, but your input can not be left blank.');
	  return false;
   }
});

//list logic & browser storage
//add using "button"
$("button").on("click", function() {
  var $item = $("input").val();
  //var $item = prompt("Add new Item");
  $("ul").append("<li>" + $item + "</li>");
  
//set
$('#form')[0].reset();
  var list = $('#list').html();
  localStorage.setItem('list', list);
  return false;
});

//add using "enter"
$('input').keypress(function(e){
  if(e.which === 13){
	$('button').click();
  }
});

//shows
if(localStorage.getItem('list')) {
  $('#list').html(localStorage.getItem('list'));
}
//remove
$("ul").on("click", "li", function () {
    $(this).remove();
    var i = $(this).text();
	// get the current list as a string.
    var currentList = localStorage.getItem('list');
	// replace the clicked item with a blank string.
    var newList = currentList.replace('<li>' + i + '</li>', '');
	// update the localStorage with the new list
    localStorage.setItem('list', newList);
});

//dropdown info
$('html').click(function(){
  $('.dropdown-menu').removeClass("active");
});

$(".dropdown-icon").click(function(e){
  e.stopPropagation();
  $('.dropdown-menu').toggleClass("active");
});

$('.dropdown-menu').click(function(e){
  e.stopPropagation();
});

//mobile keyboard fix
//to much space above iOS keyboard
/* haven't found one yet */

//make phone numbers a link
//this screws up the local storage save
/*var regex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/g; 
var text = $("body:first").html();
text = text.replace(regex, "<a href=\"tel:$&\">$&</a>");
$("body:first").html(text);*/

//button animation
(function(window, $) {
  $(function() {
	$('.ripple').on('click', function(event) {
	event.preventDefault();
	
	var $div = $('<div/>'),
	btnOffset = $(this).offset(),
	xPos = event.pageX - btnOffset.left,
	yPos = event.pageY - btnOffset.top;
	
	$div.addClass('ripple-effect');
	var $ripple = $(".ripple-effect");
	
	$ripple.css("height", $(this).height());
	$ripple.css("width", $(this).height());
	$div.css({
		top: yPos - ($ripple.height() / 2),
		left: xPos - ($ripple.width() / 2),
		background: $(this).data("ripple-color")
	})
	.appendTo($(this));
	
	window.setTimeout(function() {
	$div.remove();
	}, 2000);
	});
  });
})(window, jQuery);

//make list sortable
//needs to re-save list, once swap is complete.
//needs to toggle on/off switch
/*$("#sortme").on("click", function(){
	$(function(){
	  $("#list").sortable();
	  $("#list").disableSelection();	  
  });
});*/

// iOS Header Jumpy Fix
$(function() {
  var $body;
  if ('ontouchstart' in window) {
    $body = $("body");
    document.addEventListener('focusin', function() {
      return $body.addClass("fixfixed");
    });
    return document.addEventListener('focusout', function() {
      $body.removeClass("fixfixed");
      return setTimeout(function() {
        return $(window).scrollLeft(0);
      }, 20);
    });
  }
});

//add padding and make FAB larger in app
if(window.navigator.standalone === true){
	$('main').css('padding-top','100px');
	$('.fab').css({"width":"70px", "height":"70px"});
}

$('#history li.disabled').unbind('click');

});