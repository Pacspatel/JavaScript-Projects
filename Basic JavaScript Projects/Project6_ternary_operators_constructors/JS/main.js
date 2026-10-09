// Ternary Operators Assignment
// Check if the rider is tall enough to ride.
function ride_function() {
    var height, can_ride;

    // Get the height entered by the user.
    height = document.getElementById("height").value;

    // Use a ternary operator to check the height.
    can_ride = (height < 52) ? "You are too short" : "You are tall enough";

    // Display the result.
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}


// New Keyword Assignment
// Create a constructor function.
function Vehicle(make, model, year, color) {
    this.Vehicle_make = make;
    this.Vehicle_model = model;
    this.Vehicle_year = year;
    this.Vehicle_color = color;
}

// Use the new keyword to create a vehicle.
var my_vehicle = new Vehicle("Toyota", "Camry", 2022, "Blue");

// Display the vehicle information.
function my_function() {
    document.getElementById("Keywords").innerHTML =
        `My vehicle is a ${my_vehicle.Vehicle_color} ${my_vehicle.Vehicle_year} ${my_vehicle.Vehicle_make} ${my_vehicle.Vehicle_model}.`;
}


// Reserved Keyword Challenge
// "class" is a reserved word, so use class_name as the variable name.
var class_name = "JavaScript";

// Create a constructor function.
function Student(name, course) {
    this.Student_name = name;
    this.Student_course = course;
}

// Create a student object.
var student_1 = new Student("Prakash", class_name);

// Display the student information.
function reserved_function() {
    document.getElementById("Reserved").innerHTML =
        "Student: " + student_1.Student_name +
        ". Course: " + student_1.Student_course + ".";
}


// Nested Functions Assignment
// Create a function containing another function.
function count_function() {

    // Set the starting number.
    var starting_number = 5;

    // Create a nested function.
    function add_one() {
        starting_number += 1;
    }

    // Call the nested function.
    add_one();

    // Display the result.
    document.getElementById("Counting").innerHTML = starting_number;
}