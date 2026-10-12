// Switch Statement Assignment
function animal_function() {

    // Get the selected animal.
    var Animal = document.getElementById("Animal").value;
    var Answer;

    // Check which animal was selected.
    switch (Animal) {
        case "Dog":
            Answer = "Dogs are friendly animals.";
            break;

        case "Cat":
            Answer = "Cats like to sleep.";
            break;

        case "Lion":
            Answer = "Lions are wild animals.";
            break;

        case "Elephant":
            Answer = "Elephants are large animals.";
            break;

        default:
            Answer = "Please choose an animal.";
    }

    // Display the answer.
    document.getElementById("Answer").innerHTML = Answer;
}


// getElementsByClassName() Assignment
function change_text() {

    // Get all elements with the animal class.
    var text = document.getElementsByClassName("animal");

    // Change the paragraph text.
    text[0].innerHTML = "Dogs are very friendly.";
    text[1].innerHTML = "Cats are cute animals.";
    text[2].innerHTML = "Lions are strong animals.";
}


// Canvas Challenge and Gradient Color Challenge

// Get the canvas and its drawing area.
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// Create a gradient background.
var gradient = context.createLinearGradient(0, 0, 400, 200);

// Add colors to the gradient.
gradient.addColorStop(0, "lightblue");
gradient.addColorStop(1, "purple");

// Fill the canvas with the gradient.
context.fillStyle = gradient;
context.fillRect(0, 0, 400, 200);

// Draw a circle on the canvas.
context.beginPath();
context.arc(200, 100, 50, 0, 2 * Math.PI);
context.fillStyle = "yellow";
context.fill();

// Draw a border around the circle.
context.lineWidth = 3;
context.strokeStyle = "black";
context.stroke();
