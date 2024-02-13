let currentStep = 1;

function getChoice1()
{
    var myChoice = document.getElementById("choice").value;
    var myQuestion = document.getElementById("question");
    if(myChoice === "talk")
    {
        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit").style.display="none";
        
        document.getElementById("choice2").style.display="block";
        document.getElementById("btnSubmit2").style.display="block";
        

        myQuestion.innerHTML = "Strange Man: Talking won't get you far out here...* The man looks you up and down, almost as if he's sizing you up, as if your an animal about to be hunted*";
    }
    else if(myChoice === "walk")
    {
        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit").style.display="none";
        
        document.getElementById("choice2").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";
        myQuestion.innerHTML = "You hear laughter from the strange man as you turn around to walk away. You made yourself a target...";

    }
    else
    {
        myQuestion.innerHTML = "Invalid answer";
    }
}


function getChoice2() {
    const answer = document.getElementById("choice2").value.toLowerCase();
    const myQuestion = document.getElementById("question");

    if (answer === "run") {
        document.getElementById("mainImage").src = "img/360_F_257323518_pYwv9eGS4fI7W7hffirqoM8Oa4Ej0HUg.jpg";
        myQuestion.innerHTML = "You begin to gain speed and run towards the open landscape, the sun barely peaks from the horizon, as the moon becomes the only source of light you have.";
        
        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit").style.display="none";
        
        document.getElementById("choice3").style.display="block";
        document.getElementById("btnSubmit2").style.display="block";
        
        
        toggleInput(currentStep);
        currentStep++;
    } else if(myChoice === " pull pistol out")
    {
        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit").style.display="none";
        
        document.getElementById("choice4").style.display="block";
        document.getElementById("btnSubmit2").style.display="block";
        
        myQuestion.innerHTML = "You quickly pull out your pistol out, but you see no one in sight except for the landscape of a desert land. The sun peaks over the horizon, the moon soon rises. Its silent.";

    } else {
        myQuestion.innerHTML = "Invalid answer";
    }
}

function getChoice3() {
    const answer = document.getElementById("choice3").value.toLowerCase();
    const myQuestion = document.getElementById("question");

if (answer === "look behind") {
    document.getElementById("mainImage").src = "img/360_F_257323518_pYwv9eGS4fI7W7hffirqoM8Oa4Ej0HUg.jpg";
    myQuestion.innerHTML = "You begin to gain speed and run towards the open landscape, the sun barely peaks from the horizon, as the moon becomes the only source of light you have.";
    
    document.getElementById("choice3").style.display="none";
    document.getElementById("btnSubmit").style.display="none";
    
    document.getElementById("choice4").style.display="block";
    document.getElementById("btnSubmit2").style.display="block";
    
    
    toggleInput(currentStep);
    currentStep++;
} else if(myChoice === "rest")
{
    document.getElementById("choice3").style.display="none";
    document.getElementById("btnSubmit").style.display="none";
    
    document.getElementById("choice4").style.display="block";
    document.getElementById("btnSubmit2").style.display="block";
    
    myQuestion.innerHTML = "You quickly pull out your pistol out, but you see no one in sight except for the landscape of a desert land. The sun peaks over the horizon, the moon soon rises. Its silent.";

} else {
    myQuestion.innerHTML = "Invalid answer";
}
}


function getChoice4() {
    const answer = document.getElementById("choice4").value.toLowerCase();
    const myQuestion = document.getElementById("question");

    if (answer === "yes") {
        document.getElementById("mainImage").src = "together.jpg";
        myQuestion.innerHTML = "Thank you for your kindness!";
        toggleInput(currentStep);
        currentStep++;
    } else if (answer === "no") {
        myQuestion.innerHTML = "Please remember we are all in this together.";
        toggleInput(currentStep);
        currentStep++;
    } else {
        myQuestion.innerHTML = "Invalid answer";
    }
}

function getChoice5() {
    const answer = document.getElementById("choice5").value.toLowerCase();
    const myQuestion = document.getElementById("question");

    if (answer === "yes") {
        myQuestion.innerHTML = "Thank you for your kindness!";
        toggleInput(currentStep);
        currentStep++;
    } else if (answer === "no") {
        myQuestion.innerHTML = "Please remember we are all in this together.";
        toggleInput(currentStep);
        currentStep++;
    } else {
        myQuestion.innerHTML = "Invalid answer";
    }
}

function toggleInput(step) {
    document.getElementById(`choice${step}`).style.display = "none";
    document.getElementById(`btnSubmit${step}`).style.display = "none";
    if (step < 5) {
        document.getElementById(`choice${step + 1}`).style.display = "block";
        document.getElementById(`btnSubmit${step + 1}`).style.display = "block";
    } else {
        document.getElementById("restartBtn").style.display = "block";
    }
}

function restartStory() {
    currentStep = 1;
    document.getElementById("choice").value = "restart";
    document.getElementById("question").innerHTML = "It was a dark and lonely time in Bob's life. He was wandering aimlessly and wondering where to go. He came upon a tree and it asked him what his favorite color was. He had only two choices. It was Green or Blue.";
    document.getElementById("mainImage").src = "tree.jpeg";

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`choice${i}`).value = "";
        document.getElementById(`choice${i}`).style.display = "none";
        document.getElementById(`btnSubmit${i}`).style.display = "none";
    }
}
