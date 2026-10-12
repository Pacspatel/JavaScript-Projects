 
// This function gets the pizza size, toppings, and total price.
function getReceipt() {

    // Create the receipt text and initialize the total prices.
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var selectedSize = "";

    // Get all the pizza size radio buttons.
    var sizeArray = document.getElementsByClassName("size");

    // Find the pizza size selected by the customer.
    for (var i = 0; i < sizeArray.length; i++) {

        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;

            // Add the selected size to the receipt.
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Check the price for the selected pizza size.
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    // Set the running total to the pizza size price.
    runningTotal = sizeTotal;

    // Show the selected pizza size and price in the console.
    console.log(selectedSize + " = $" + sizeTotal.toFixed(2));

    // Send the price and receipt text to the topping function.
    getTopping(runningTotal, text1);
}


// This function gets the selected toppings and calculates their price.
function getTopping(runningTotal, text1) {

    // Start the topping price at zero.
    var toppingTotal = 0;

    // Create an array to store the selected toppings.
    var selectedTopping = [];

    // Get all the meat and vegetable checkboxes.
    var toppingArray = document.getElementsByClassName("toppings");

    // Check which toppings the customer selected.
    for (var j = 0; j < toppingArray.length; j++) {

        if (toppingArray[j].checked) {

            // Add the selected topping to the array.
            selectedTopping.push(toppingArray[j].value);

            // Add the topping to the receipt.
            text1 = text1 + toppingArray[j].value + "<br>";

            // Show the selected topping in the console.
            console.log("Selected topping: " + toppingArray[j].value);
        }
    }

    // Count how many toppings the customer selected.
    var toppingCount = selectedTopping.length;

    // The first topping is free. Each extra topping costs $1.
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }

    // Add the topping price to the pizza size price.
    runningTotal = runningTotal + toppingTotal;

    // Display information in the browser console.
    console.log("Total toppings: " + toppingCount);
    console.log("Topping price: $" + toppingTotal.toFixed(2));
    console.log("Final total: $" + runningTotal.toFixed(2));

    // Display the order receipt on the webpage.
    document.getElementById("showText").innerHTML = text1;

    // Display the final price with two decimal places.
    document.getElementById("totalPrice").innerHTML =
        "<h3>Total: <strong>$" +
        runningTotal.toFixed(2) +
        "</strong></h3>";
}
 
