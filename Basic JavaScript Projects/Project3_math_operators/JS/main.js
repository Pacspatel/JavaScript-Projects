// Addition Assignment
// Create a function that adds two numbers.
function addition_function() {
    let number_1 = 10;
    let number_2 = 20;

    // Display the addition result.
    document.getElementById("Math").innerHTML = number_1 + number_2;
}

// Subtraction Assignment
// Create a function that subtracts two numbers.
function subtraction_function() {
    let number_1 = 30;
    let number_2 = 10;

    // Display the subtraction result.
    document.getElementById("Subtraction").innerHTML = number_1 - number_2;
}

// Multiplication Assignment
// Create a function that multiplies two numbers.
function multiplication_function() {
    let number_1 = 10;
    let number_2 = 5;

    // Display the multiplication result.
    document.getElementById("Multiplication").innerHTML = number_1 * number_2;
}

// Division Assignment
// Create a function that divides two numbers.
function division_function() {
    let number_1 = 20;
    let number_2 = 5;

    // Display the division result.
    document.getElementById("Division").innerHTML = number_1 / number_2;
}

// Multiple Operators Assignment
// Create a function using multiple mathematical operators.
function multiple_function() {
    let number_1 = 10;
    let number_2 = 5;
    let number_3 = 2;

    // Use addition, multiplication, and subtraction.
    let result_1 = number_1 + number_2;
    let result_2 = number_1 * number_3;
    let result_3 = number_1 - number_2;

    // Display all the results.
    document.getElementById("Multiple").innerHTML =
        "Addition: " + result_1 +
        " | Multiplication: " + result_2 +
        " | Subtraction: " + result_3;
}

// Modulus Operator Assignment
// Create a function using the modulus operator.
function modulus_function() {
    let number_1 = 17;
    let number_2 = 5;

    // The modulus operator gives the remainder.
    document.getElementById("Modulus").innerHTML = number_1 % number_2;
}

// Negation Operator Assignment
// Create a function using the negation operator.
function negation_function() {
    let number_1 = 10;

    // The negation operator changes the number to a negative value.
    document.getElementById("Negation").innerHTML = -number_1;
}

// Increment Assignment
// Create a function using the increment operator.
function increment_function() {
    let number_1 = 10;

    // Increase the number by 1.
    number_1++;

    // Display the increment result.
    document.getElementById("Increment").innerHTML = number_1;
}

// Decrement Assignment
// Create a function using the decrement operator.
function decrement_function() {
    let number_1 = 10;

    // Decrease the number by 1.
    number_1--;

    // Display the decrement result.
    document.getElementById("Decrement").innerHTML = number_1;
}

// Math.random Assignment
// Create a function using Math.random().
function random_function() {

    // Generate a random number between 0 and 1.
    let random_number = Math.random();

    // Display the random number.
    document.getElementById("Random").innerHTML = random_number;
}

















