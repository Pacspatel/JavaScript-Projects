// Create a function.
function my_function() {
    // Create two variables.
    let sentence_1 = "Hello, my name is ";
    let sentence_2 = "Prakash Patel.";

    // Use the += operator to concatenate the strings.
    sentence_1 += sentence_2;

    // Display the result in the paragraph.
    document.getElementById("my_paragraph").innerHTML = sentence_1;
}

// Create my own JavaScript function.
function my_function2() {
    // Create a message.
    let message_2 = "Hello Prakash! Welcome to my JavaScript project.";

    // Use getElementById to display the message.
    document.getElementById("my_paragraph2").innerHTML = message_2;
}