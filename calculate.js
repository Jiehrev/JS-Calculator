const windowVal = document.querySelector("#inputWindow");
// Adds the buttons value to the text display when clicked
$(".button").on("click", function() {
    windowVal.value += $(this).val();
});
// Evaluates the contents of the text dislay when "=" is clicked
$("#equals").on("click", function() {
    windowVal.value = eval(windowVal.value);
});
// Clears the display when the "AC" button is clicked
$("#clear").on("click", function() {
    windowVal.value = "";
});

