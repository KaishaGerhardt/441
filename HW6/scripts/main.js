var imageNames = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
var blankImagePath = "images/cardcover.jpg";
var firstNumber = -1;
var secondNumber = -1;
var player = {"firstname": "", "lastname": "", "age": 0, "attempts": 0 }; // Initialize age, attempts
var actualImages = [];

function printBlanks() {
    createRandomImageArray();
    for (var i = 0; i < imageNames.length; i++) {
        document.getElementById(imageNames[i]).src = blankImagePath;
    }
}

function createRandomImageArray() {
    var actualImagePath = ["images/screaming cat.jpg", "images/screaming trash cat.jpg", "images/biting ankles.jpg", "images/cat cheesing.jpg", "images/cat scream.jpg", "images/cat with other cat.jpg", "images/galaxy cat.jpg", "images/possom hour.jpg", "images/possom scream.jpg", "images/possom screaming I.png", "images/smiley cat.jpg", "images/wisp cat.jpg"];
    var count = Array(actualImagePath.length).fill(0);
    while (actualImages.length < 12) { // Only need 12 images, 6 pairs
        var randomNumber = Math.floor(Math.random() * actualImagePath.length);
        if (count[randomNumber] < 2) { // Ensure only two of the same image are added
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber]++;
        }
    }
}

function flipImage(number) {
    if (firstNumber >= 0) {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];
        if (actualImages[firstNumber] !== actualImages[secondNumber]) {
            setTimeout(imagesDisappear, 1000);
        } else {
            firstNumber = -1;
            secondNumber = -1;
        }
    } else {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src = actualImages[firstNumber];
    }
}

function imagesDisappear() {
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
    player.attempts++; // Increment attempts counter
}

function addToPlayer() {
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = parseInt(document.getElementById("txtAge").value); 
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location.href = "index.html"; // Redirect to memory matching game
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
   
}
