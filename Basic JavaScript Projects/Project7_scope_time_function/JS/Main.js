
// Global variable
var global_1 = "I am a global variable";

// Create a function to display the variables.
function show_variables() {

    // Local variable
    var local_1 = "I am a local variable";

    // Display both variables on the webpage.
    document.getElementById("variables").innerHTML =
        global_1 + "<br>" + local_1;

    // Display both variables in the console.
    console.log(global_1);
    console.log(local_1);
}


// If Statement Assignment
// Check if a number is greater than 5.
function if_function() {

    // Create a local variable.
    var number_1 = 10;

    // Check the condition using an if statement.
    if (number_1 > 5) {
        document.getElementById("if_result").innerHTML =
            "The number is greater than 5.";
    }
}


// Create a function with an error for debugging practice.
function error_function() {

    // This variable name is incorrect on purpose.
    var number_1 = 10;

    // Use the console to find the error.
    console.log(number_2);
}


// Else Assignment
// Check if the entered number is 10 or greater than 10.
function else_function() {

    // Get the number entered by the user.
    var number_1 = document.getElementById("number_input").value;

    // Use if and else to check the number.
    if (number_1 >= 10) {
        document.getElementById("else_result").innerHTML =
            "The number is 10 or greater.";
    } else {
        document.getElementById("else_result").innerHTML =
            "The number is less than 10.";
    }
}


// Else If Assignment
// Check the number and display its category.
function else_if_function() {

    // Get the number entered by the user.
    var number_1 = document.getElementById("category_input").value;

    // Check different conditions.
    if (number_1 > 10) {
        document.getElementById("category_result").innerHTML =
            "The number is greater than 10.";
    } else if (number_1 == 10) {
        document.getElementById("category_result").innerHTML =
            "The number is equal to 10.";
    } else {
        document.getElementById("category_result").innerHTML =
            "The number is less than 10.";
    }
}

// Method Assignment
// Check the current hour and display a greeting.
function time_function() {

    // Get the current hour.
    var time_1 = new Date().getHours();

    // Display a greeting based on the time.
    if (time_1 < 12) {
        document.getElementById("Greeting").innerHTML =
            "Good morning!";
    } else if (time_1 < 18) {
        document.getElementById("Greeting").innerHTML =
            "Good afternoon!";
    } else {
        document.getElementById("Greeting").innerHTML =
            "Good evening!";
    }
}