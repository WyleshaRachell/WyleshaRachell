
/*Variables*/

var addZeroElement = document.getElementById('zero');
var addFiveElement = document.getElementById('add5');
var addTenElement = document.getElementById('add10');
var subOneElement = document.getElementById('sub1');
var results = document.getElementById('result');
var randomElement = document.getElementById('random');
var total = 0;



/*Execute Code Here*/
addZeroElement.onclick = addZero;
addFiveElement.onclick = addFive;
addTenElement.onclick = addTen;
subOneElement.onclick = subOne;
randomElement.onclick = function() {
  var number = prompt("What's your number?");
  addRandom(number);
};


results.onmouseover = function() {
  results.style.color = 'blue';
};

results.onmouseout = function() {
  results.style.color = 'green';
};


/*My Functions Goes Here*/
function addZero() {
  total = total + 0;
  results.innerHTML = total;
}

function addFive() {
  total = total + 5;
  results.innerHTML = total;

}

function addTen() {
  total = total + 10;
  results.innerHTML = total;

}

function subOne() {
  total = total - 1;
  results.innerHTML = total;
}

function addRandom(number) {
  total = total + Number(number);
  results.innerHTML = total;
}


/*Testing out an object*/
var person  = {
  firstName: "Wylesha",
  lastName: "Rachell",
  age: 31,
  favoriteColor: "blue",
  favoriteSnack: "Reeses",
  msg: function() {
    var msg = "My name is " + this.firstName;
    return msg;
  }
};

console.log(person.msg());
























console.log(person);



