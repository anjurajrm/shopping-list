$(function() {
  $("#js-shopping-list-form").submit(event => {
    //prevent the default submission behaviour of forms
    event.preventDefault();

    //get the value of item we entered and store  it in item
    const item = $("#shopping-list-entry").val();
    //console.log(item)

    //append the li   of item to the main ul
    $(".shopping-list").append(`<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    $("#shopping-list-entry").val(""); //text -input emptied after submission
  });

  //in the main ul , if the check button is clicked
  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    //finds the closest li and adds/removes(toggles) class fromm css doc
    $(this)
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  //in the main ul , if the delete button is clicked
  $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    //finds the closest li and removes the li
    $(this)
      .closest("li")
      .remove();
  });
});
