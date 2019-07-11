// enter items they need to purchase by entering text 
// and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

// build a function that encapsulates all of the above by targeting specific items
// and uisng items such as this, .submit(), preventDefault(), toggleClass(), and closest().

// $(function() {
//     $('#js.shopping-list-form').submit(event => {
//         event.preventDefault();
//         const userListElement = $
//         (event.currentTarget).add('.shopping-item-controls');
//         $('.shopping-item-controls').toggleClass();
//     }
// }

$(function() {
    console.log("test")
    $('.js-shopping-list-form').submit(event => { 
    event.preventDefault(); 
    console.log("ehhh")
    const userTextElement = $(event.currentTarget).find('#shopping-list-entry'); 
    console.log(userTextElement) 
  });
})