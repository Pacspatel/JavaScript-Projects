
// Countdown timer function
function countdown() {

    // Get the input from the user.
    var seconds = document.getElementById("seconds").value;
    var timer = document.getElementById("timer");

    // Function to perform the countdown.
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            timer.innerHTML = "";
            alert("Time's up!");
        }
    }

    // Start the countdown.
    tick();
}


// Image slideshow functions
let slideIndex = 1;
showSlides(slideIndex);

// Next and Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Select a slide using the dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display the selected slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Return if no slides are found.
    if (slides.length === 0) {
        return;
    }

    // Go to the first slide after the last slide.
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Go to the last slide before the first slide.
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the active style from all dots.
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide.
    slides[slideIndex - 1].style.display = "block";

    // Highlight the current dot.
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }
}