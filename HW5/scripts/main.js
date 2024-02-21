// Array of image names that correspond to the image tags
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];

// Blank image path
var blankImagePath = "images/hqdefault.jpg";

// Array for actual images
var actualImages = [];

// Function to print blank images
function printBlanks() {
    createRandomImageArray();

    // Loop through image tags and set the source to blank image path
    for (var i = 0; i < imageTags.length; i++) {
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
}

// Function to create random image array
function createRandomImageArray() {
    var actualImagePath = ["images/1a01115a38522d68ba456defd466c92f.jpg", "images/F47OWSMWQAAOyiH.jpg"];
    var count = [0, 0];

    // Loop to fill the actualImages array with randomized images
    while (actualImages.length < 4) {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);
        if (count[randomNumber] < 2) {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber]++;
        }
    }
}

// Function to reveal the actual image when a blank image is clicked
function flipImage(number) {
    document.getElementById(imageTags[number]).src = actualImages[number];
}

// Display the blank images grid when the page loads
window.onload = function() {
    printBlanks();
};
