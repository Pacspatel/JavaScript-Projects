// WHILE LOOP ASSIGNMENT
// Repeat the loop while count is less than 6.
function call_loop() {
    var text = "";
    var count = 1;

    while (count < 6) {
        text += "Number " + count + "<br>";
        count++;
    }

    // Display the result in the HTML paragraph.
    document.getElementById("loop").innerHTML = text;
}


// STRING LENGTH CHALLENGE
// The length property counts the characters in a string.
function string_length() {
    var text = "Hello World!";

    // Display the number of characters.
    document.getElementById("Length").innerHTML =
        "The length of Hello World! is " + text.length;
}


// FOR LOOP ASSIGNMENT
// Use a for loop to count from 1 to 5.
function for_loop() {
    var text = "";

    for (var i = 1; i <= 5; i++) {
        text += "Number " + i + "<br>";
    }

    // Display the result.
    document.getElementById("For_Loop").innerHTML = text;
}


// ARRAY ASSIGNMENT
// Create an array containing three fruits.
function array_function() {
    var Fruits = ["Apple", "Banana", "Orange"];

    // Display the array values.
    document.getElementById("Array").innerHTML =
        Fruits[0] + ", " + Fruits[1] + ", " + Fruits[2];
}


// CONST KEYWORD ASSIGNMENT
// Create an object using const.
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2024
};

// Create a function to display the object properties.
function constant_function() {

    // Change a property value and add a new property.
    car.year = 2025;
    car.color = "Blue";

    // Display the changed and added property values.
    document.getElementById("Constant").innerHTML =
        "My car is a " + car.color + " " + car.make +
        " " + car.model + " from " + car.year + ".";
}


// LET KEYWORD ASSIGNMENT
// Use let to create and change a variable.
function let_function() {
    let name = "Prakash";

    // Change the variable value.
    name = "JavaScript Student";

    // Display the value.
    document.getElementById("Let").innerHTML =
        "Hello, " + name + "!";
}


// RETURN STATEMENT CHALLENGE
// Return a value from a function.
function add_numbers() {
    return 5 + 5;
}

// Display the returned value.
function return_function() {
    document.getElementById("Return").innerHTML =
        "The answer is " + add_numbers();
}


// OBJECT ASSIGNMENT
// Create an object using let with properties and a method.
let person = {
    firstName: "John",
    lastName: "Smith",

    // This method returns the person's full name.
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Display the object method result.
function object_function() {
    document.getElementById("Object").innerHTML =
        "Person's name: " + person.fullName();
}


// BREAK CHALLENGE
// Stop the loop when count reaches 4.
function break_function() {
    var text = "";

    for (var i = 1; i <= 6; i++) {

        // Stop the loop when i equals 4.
        if (i === 4) {
            break;
        }

        text += i + "<br>";
    }

    // Display the numbers before the loop stops.
    document.getElementById("Break").innerHTML = text;
}


// CONTINUE CHALLENGE
// Skip the number 3 and continue the loop.
function continue_function() {
    var text = "";

    for (var i = 1; i <= 5; i++) {

        // Skip this number.
        if (i === 3) {
            continue;
        }

        text += i + "<br>";
    }

    // Display the numbers, except 3.
    document.getElementById("Continue").innerHTML = text;
}
 