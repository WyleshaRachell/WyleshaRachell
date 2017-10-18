//Stop Links from jumping on page
var linkElements = document.getElementsByTagName('a');

for (var i=0; i<linkElements.length; i++) {
  linkElements[i].onclick = function(event) {
    event.preventDefault();
  }
}


//Toggle between readmore and readless
var readMoreElement = document.getElementsByClassName('readmore');
var readLessElement = document.getElementsByClassName('readless');
var showThisElement = document.getElementById('show-this-on-click');

readMoreElement[0].onclick = function() {
  readMoreElement[0].style.display = 'none';
  readLessElement[0].style.display = 'block';
  showThisElement.style.display = 'block';
};

readLessElement[0].onclick = function() {
  readMoreElement[0].style.display = 'block';
  readLessElement[0].style.display = 'none';
  showThisElement.style.display = 'none';
};

//Show Learn More text
var learnMoreElement = document.getElementsByClassName('learnmore');
var learnMoreTextElement = document.getElementById('learnmoretext');


learnMoreElement[0].onclick = function(event) {
  learnMoreElement[0].style.display = 'none';
  learnMoreTextElement.style.display = 'block';
  event.preventDefault();
}










