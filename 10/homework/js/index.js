$(document).ready(function() {

  var cities = [
    'New York City',
    'San Franciso',
    'Los Angeles',
    'Austin',
    'Sydney',
    'Atlanta'
  ];

  $(cities).each(function(i, city) {
    $('#city-type').append('<option value="'+city+'">'+city+'</option>');
  });

  $('form').submit(function(event) {
    var inputField = $('select').val();

    console.log(inputField);

    $('body').attr('class', '');

    if(inputField === 'New York' || inputField === 'NYC' || inputField === 'New York City') {

      //$('body').css('background', 'url("./images/nyc.jpg")');
      $('body').addClass('nyc');
    } else if (inputField === 'SF') {
      $('body').addClass('sf');
    }

    event.preventDefault();
  });
    
});