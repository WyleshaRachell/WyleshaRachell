$(document).ready(function() {

  //Add Item to the TODO List
  $('#addTodoList').submit(addToDoListItem);
  $('#clearList').click(emptyToDoList);
  $('#clearCompletedList').click(removeCompletedToDoListItems);
  $('#todos').on('click', '.remove', removeToDoListItem);
  $('#todos').on('click', '.edit', editToDoListItem);
  $('#todos').on('blur', '.editor', saveEditedToDoListItem);
  $('#todos').on('click', 'li', markToDoListItemAsCompleted)


  //API Functions
  function addToDoListItem() {
    //Get the value of the input field
    var item = $('#addTodoItem').val();

    //Append the item to the unordered list
    $('#todos').append('<li><span class="item">'+item+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');

    updateNumberOfToDoListItems();
  }

  function removeToDoListItem() {
    $(this).parents('li').remove();
  }

  function editToDoListItem() {
    var editClicked = $(this).parents('li');
    var itemContent = $(this).siblings('.item').text();
    $(editClicked).html('<form class="editor" action=""><input type="text" value="'+itemContent+'"/></form>');
  }

  function saveEditedToDoListItem() {
    var newItem = $(this).find('input').val();
    var listItem = $(this).parents('li');
    $(listItem).html('<span class="item">'+newItem+'</span><a class="edit">Edit</a><a class="remove">Remove</a>');
  }

  function markToDoListItemAsCompleted() {
    $(this).toggleClass('done');
    updateNumberOfToDoListItems();
  }

  function emptyToDoList() {
    $('#todos').empty();
    updateNumberOfToDoListItems();
  }

  function removeCompletedToDoListItems() {
    $('.done').remove();
  }

  function updateNumberOfToDoListItems() {
    var count = $('#todos li').not('.done').length;
    $('#count').html(count);
  }

});