// enter items they need to purchase by entering text 
// and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
// enter items they need to purchase by entering text 
// and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

// build a function that encapsulates all of the above by targeting specific items
// and uisng items such as this, .submit(), preventDefault(), toggleClass(), and closest().

$("#js-shopping-list-form").on("submit", function (e) {
  e.preventDefault();

  $(".shopping-list").append(
    '<li>' +
    '<span class="shopping-item">' + $("#shopping-list-entry").val() + '</span>' +
    '<div class="shopping-item-controls">' +
    '<button class="shopping-item-toggle">' +
    '<span class="button-label">check</span>' +
    '</button>' +
    ' <button class="shopping-item-delete">' +
    '<span class="button-label">delete</span>' +
    '</button>' +
    '</div>' +
    '</li>'
  );

  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(this).closest("li").detach();
    });

  $('ul').on('click', '.shopping-item-toggle', function(event) {
    event.stopPropagation();
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });

});
