
// Concat() Method Assignment
// Join two or more strings together.
function concat_function() {

    // Create two strings.
    var word_1 = "Hello ";
    var word_2 = "Prakash!";

    // Use concat() to join the strings.
    var result_1 = word_1.concat(word_2);

    // Display the result.
    document.getElementById("concat_result").innerHTML = result_1;
}


// Slice() Method Assignment
// Display a section of a string.
function slice_function() {

    // Create a string.
    var sentence_1 = "JavaScript String Methods";

    // Use slice() to get part of the string.
    var result_2 = sentence_1.slice(11, 17);

    // Display the result.
    document.getElementById("slice_result").innerHTML = result_2;
}


// More Methods Challenge
// toUpperCase() changes a string to uppercase letters.
function uppercase_function() {

    // Create a string.
    var word_3 = "javascript is fun";

    // Convert the string to uppercase.
    var result_3 = word_3.toUpperCase();

    // Display the result.
    document.getElementById("uppercase_result").innerHTML = result_3;
}


// search() finds the position of a word in a string.
function search_function() {

    // Create a string.
    var sentence_2 = "I am learning JavaScript";

    // Search for the word JavaScript.
    var result_4 = sentence_2.search("JavaScript");

    // Display the position where the word starts.
    document.getElementById("search_result").innerHTML =
        "JavaScript starts at position: " + result_4;
}


// Number Methods Assignment
// toString() converts a number to a string.
function toString_function() {

    // Create a number.
    var number_1 = 123;

    // Convert the number to a string.
    var result_5 = number_1.toString();

    // Display the result.
    document.getElementById("toString_result").innerHTML =
        result_5 + " (Type: " + typeof result_5 + ")";
}


// toPrecision() Method Assignment
// toPrecision() returns a number with a specified number of significant digits.
function precision_function() {

    // Create a number.
    var number_2 = 123.456;

    // Set the number to 5 significant digits.
    var result_6 = number_2.toPrecision(5);

    // Display the result.
    document.getElementById("precision_result").innerHTML = result_6;
}


// New Methods Challenge
// toFixed() formats a number to a specified number of decimal places.
function fixed_function() {

    // Create a number.
    var number_3 = 12.3456;

    // Keep two decimal places.
    var result_7 = number_3.toFixed(2);

    // Display the result.
    document.getElementById("fixed_result").innerHTML = result_7;
}


// valueOf() returns the primitive value of a number object.
function valueof_function() {

    // Create a number object.
    var number_4 = new Number(100);

    // Get its primitive number value.
    var result_8 = number_4.valueOf();

    // Display the result.
    document.getElementById("valueof_result").innerHTML = result_8;
}