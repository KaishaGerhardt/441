// Create an empty array to store ViewFinder objects
var myViewFinderArray = [];

// Define the ViewFinder class with expanded properties
class ViewFinder {
    constructor(title, imagePath, description, author, year) {
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
        this.author = author;
        this.year = year;
    }

    // Returns a formatted string with all the ViewFinder information
    toString() {
        return `Title: ${this.title}<br>
                <img src="${this.imagePath}" alt="${this.title}" style="width:100%;max-width:1000px;"><br>
                Description: ${this.description}<br>
                Author: ${this.author}<br>
                Year: ${this.year}`;
    }
}

// Initializes the array with ViewFinder objects
function initializeArray() {
    myViewFinderArray.push(new ViewFinder("Unrest in Baton Rouge", "images/Unrest in Baton Rouge.png", "A photograph of a woman protesting the death of Alton Sterling in Baton Rouge, Louisiana", "Jonathan Bachman", 2016));
    myViewFinderArray.push(new ViewFinder("Equality Now", "images/equality.jpg", "Rally for equality and rights.", "Maria Garcia", 2019));
    myViewFinderArray.push(new ViewFinder("Climate Change Protest", "images/climate.jpg", "Voices against climate change.", "John Doe", 2020));
    myViewFinderArray.push(new ViewFinder("Peaceful Demonstration", "images/peace.jpg", "A peaceful call for change.", "Jane Roe", 2021));
    myViewFinderArray.push(new ViewFinder("Voting Rights", "images/voting.jpg", "Campaign for protecting voting rights.", "Chris Lee", 2022));
}

// Displays a random ViewFinder object's information
function accessInformation() {
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("viewFinderDisplay").innerHTML = myViewFinderArray[randomNumber].toString();
}
