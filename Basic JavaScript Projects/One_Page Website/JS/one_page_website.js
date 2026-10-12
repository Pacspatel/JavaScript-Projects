 
// Get all the gallery images from the webpage.
var galleryImages = document.querySelectorAll(".gallery-image");

// Create the lightbox background.
var lightbox = document.createElement("div");
lightbox.className = "lightbox";

// Create the close button.
var closeButton = document.createElement("span");
closeButton.className = "lightbox-close";
closeButton.innerHTML = "&times;";
closeButton.setAttribute("aria-label", "Close gallery");

// Create the large image.
var largeImage = document.createElement("img");
largeImage.className = "lightbox-content";
largeImage.alt = "";

// Create the previous image button.
var previousButton = document.createElement("span");
previousButton.className = "lightbox-prev";
previousButton.innerHTML = "&#10094;";
previousButton.setAttribute("aria-label", "Previous image");

// Create the next image button.
var nextButton = document.createElement("span");
nextButton.className = "lightbox-next";
nextButton.innerHTML = "&#10095;";
nextButton.setAttribute("aria-label", "Next image");

// Add the buttons and image to the lightbox.
lightbox.appendChild(closeButton);
lightbox.appendChild(previousButton);
lightbox.appendChild(largeImage);
lightbox.appendChild(nextButton);

// Add the lightbox to the webpage.
document.body.appendChild(lightbox);

// Store the current image position.
var currentImageIndex = 0;

// Display the selected large image.
function showImage(index) {

    // Return to the first image after the last image.
    if (index >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (index < 0) {
        // Go to the last image if moving before the first.
        currentImageIndex = galleryImages.length - 1;
    } else {
        currentImageIndex = index;
    }

    // Get the selected thumbnail image.
    var selectedImage = galleryImages[currentImageIndex];

    // Use the larger image when a data-large path is available.
    // Otherwise, use the original image source.
    largeImage.src =
        selectedImage.getAttribute("data-large") ||
        selectedImage.src;

    // Copy the description to the large image.
    largeImage.alt = selectedImage.alt;

    // Show the lightbox.
    lightbox.style.display = "block";
}

// Open the lightbox when a thumbnail is clicked.
galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {
        showImage(index);
    });

});

// Display the previous image.
previousButton.addEventListener("click", function(event) {
    event.stopPropagation();
    showImage(currentImageIndex - 1);
});

// Display the next image.
nextButton.addEventListener("click", function(event) {
    event.stopPropagation();
    showImage(currentImageIndex + 1);
});

// Close the lightbox using the close button.
closeButton.addEventListener("click", function() {
    lightbox.style.display = "none";
});

// Close the lightbox when the background is clicked.
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }

});

// Allow the Escape key to close the lightbox.
document.addEventListener("keydown", function(event) {

    if (lightbox.style.display === "block") {

        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }

        // Use the left arrow key for the previous image.
        if (event.key === "ArrowLeft") {
            showImage(currentImageIndex - 1);
        }

        // Use the right arrow key for the next image.
        if (event.key === "ArrowRight") {
            showImage(currentImageIndex + 1);
        }
    }

});
 