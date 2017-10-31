//#1: How can you use variables here
var name = 'Wylesha';
var imagePath = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/19a/386/31be5db.jpg';

$(".info").append("<img src='"+ imagePath +"' alt='"+ name +"' picture'><p>The instructor for this course is Wylesha Rachell. "+ name +" has a degree in Business Management from LSU.</p>");

//#2: How can you turn this into a function
var myGroceryList = [
  "Milk",
  "Cookies",
  "Sugar",
  "Bananas",
  'Gatorade', 
  "Oreos",
  "Wine"
];

$(myGroceryList).each(function(i, item) {
  $('.groceryList').prepend("<li>"+item+"</li>")
});

for(var i=0; i < myGroceryList.length; i++) {
  var item = myGroceryList[i];
}

//#3: Take the same example and use an array

//#4: Combine jQuery Selectors
/*
$("#container, #main").css({
  "width": "960px",
  "background": "grey",
  "color": "#fff",
  "font-size": "14px",
  "box-shadow": "0 0 10px #ccc",
})*/

//#4: How can we used muliple property: values in the css method?

//#5: Chain jQuery function calls
$("input")
  .css("width","200px")
  .attr("placeholder","My placeholder")
  .before("<label>My input </label>");


//This
$('p').on('click',function(e){
    $(this).fadeOut(500);
});
