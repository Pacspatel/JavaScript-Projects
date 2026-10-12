// Create a function to read the data attributes.
function show_animal() {

    // Get the first paragraph.
    var animal = document.getElementsByTagName("p")[0];

    // Get information from the data attributes.
    var name = animal.getAttribute("data-animal");
    var sound = animal.getAttribute("data-sound");

    // Display the information.
    document.getElementById("result").innerHTML =
        name + " says " + sound + "!";
} 