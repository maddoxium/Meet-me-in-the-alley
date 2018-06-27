$(document).ready(function() {
  var product_name = $("#Product_Name");
  var description = $("#Description");
  var price = $("#Price");
  var category = $("#Category").val();

  $(document).on("click", "#submit", handleProductFormSubmit);

  function handleProductFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (
      !product_name
        .val()
        .trim()
        .trim() &&
      !description.val().trim() &&
      !price.val().trim()
    ) {
      return;
    }
    createProduct({
      Product_Name: product_name.trim(),
      Description: description,
      Price: price.trim(),
      Category: category
    });
  }

  function createProduct(data) {
    $.post("/api/Products", data).then(function() {
      console.log("Posted");
    });
  }
});
