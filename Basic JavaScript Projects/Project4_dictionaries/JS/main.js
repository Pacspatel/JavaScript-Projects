// Dictionary Assignment
// Create a dictionary using JavaScript objects.
function dictionary_function() {

    // Create a dictionary with key-value pairs.
    let animal_1 = {
        name: "Lion",
        color: "Brown",
        age: 5
    };

    // Display a key-value pair from the dictionary.
    document.getElementById("Dictionary").innerHTML =
        "Animal: " + animal_1.name + ", Color: " + animal_1.color;
}


// Delete Assignment
// Create a dictionary and delete a key before displaying its value.
function delete_function() {

    // Create a dictionary with key-value pairs.
    let animal_1 = {
        name: "Lion",
        color: "Brown",
        age: 5
    };

    // Delete the age key from the dictionary.
    delete animal_1.age;

    // Display the value of the deleted key.
    document.getElementById("Dictionary").innerHTML = animal_1.age;
}