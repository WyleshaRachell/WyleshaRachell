$('.actions').click(function() {

  $('body').css('background-color', '#343D46');
  $('body, p').css('color', '#fff');
});


$('.slideUp').click(function() {
  var duration = 'slow';
  $('.slideUpBox').slideUp(duration);
});

$('.slideDown').click(function() {
  $('.slideDownBox').slideDown('fast');
});

$('.toggle').click(function() {
  $('.toggleBox').slideToggle();
});

$('#showBoxes').click(function() {
  $('.box').show();
});

$('#hideBoxes').click(function() {
  $('.box').hide();
});

$('h2.clickMe').click(function() {
  $('ul').children().css({
    'font-weight' : 'bold',
    'font-size': 16
  });
});


$('img').click(function(event) {
  $('img').attr('src','http://www.zastavki.com/pictures/originals/2013/_SWAG_on_a_gray_background_047286_.png');
});








