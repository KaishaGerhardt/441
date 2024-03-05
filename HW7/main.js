
var myViewFinderArray = [];


class ViewFinder {
    constructor(title, imagePath, description, author, year) {
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
        this.author = author;
        this.year = year;
    }


    toString() {
        return `Title: ${this.title}<br>
                <img src="${this.imagePath}" alt="${this.title}" style="width:100%;max-width:1000px;"><br>
                Description: ${this.description}<br>
                Author: ${this.author}<br>
                Year: ${this.year}`;
    }
}


function initializeArray() {
    myViewFinderArray.push(new ViewFinder("Unrest in Baton Rouge", "images/Unrest in Baton Rouge.png", "A photograph of a woman protesting the death of Alton Sterling in Baton Rouge, Louisiana", "Jonathan Bachman", 2016));
    myViewFinderArray.push(new ViewFinder("I Shouldn’t Have to Be a “Strong Black Woman” for My Life to Matter", "images/Photo by Dai Sugano.png", "A protester takes a knee in front of San Jose Police Department officers during a protest in San Jose, California, on May 29, 2020, after George Floyd died at the hands of the Minneapolis police", "Dai Sugano", 2020));
    myViewFinderArray.push(new ViewFinder("Breonna Taylor", "images/Breonna Taylor Mural.png", " Mural depicting Breonna Taylor with the text Black Lives Matter is seen at Chambers Park in Annapolis, Maryland, on July 5, 2020. The painting honors Breonna Taylor, who was shot and killed by members of the Louisville Metro Police Department in March 2020.", "Patrick Smith", 2020));
    myViewFinderArray.push(new ViewFinder("Ban Off Our Bodies", "images/Ban Off Our Bodies.jpg", "A protester holds a sign at an abortion rights rally at the state Capitol on May 3, 2022.", "Jerod MacDonald-Evoy", 2022));
    myViewFinderArray.push(new ViewFinder("Supporters of Palestine", "images/Supporters of Palestine.png", "Supporters of Palestine march on 6th Street toward Independence Mall led by Rami Ibrahim", "Emma Lee", 2023));
}


function accessInformation() {
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("viewFinderDisplay").innerHTML = myViewFinderArray[randomNumber].toString();
}
