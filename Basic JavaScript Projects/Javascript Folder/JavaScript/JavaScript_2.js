// Create a function to validate the form.
function validateForm() {

    // Get the values entered by the user.
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Get the places to display messages.
    var error = document.getElementById("error");
    var success = document.getElementById("success");

    // Clear old messages.
    error.innerHTML = "";
    success.innerHTML = "";

    // Check if any field is empty.
    if (name === "" || email === "" || message === "") {
        error.innerHTML = "Please fill in all fields.";
        return false;
    }

    // Check if the email looks valid.
    if (!email.includes("@") || !email.includes(".")) {
        error.innerHTML = "Please enter a valid email address.";
        return false;
    }

    // Show a success message if all checks pass.
    success.innerHTML = "Form validation successful!";

    // Stop the form from submitting because this is a practice form.
    return false;
} 