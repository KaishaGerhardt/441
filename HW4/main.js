let currentStep = 1;

function getChoice1() {
    const myChoice = document.getElementById("choice").value.toLowerCase();
    const myQuestion = document.getElementById("question");

    if (myChoice === "talk") {
        document.getElementById("choice").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice2").style.display = "block";
        document.getElementById("btnSubmit2").style.display = "block";

        myQuestion.innerHTML = "Strange Man: Talking won't get you far out here...* The man looks you up and down, almost as if he's sizing you up, as if you're an animal about to be hunted*";
    } else if (myChoice === "walk") {
        document.getElementById("choice").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice2").style.display = "block";
        document.getElementById("btnSubmit2").style.display = "block";

        myQuestion.innerHTML = "You hear laughter from the strange man as you turn around to walk away. You made yourself a target...";
    } else {
        myQuestion.innerHTML = "Invalid answer";
    }
}

function getChoice2() {
    const answer = document.getElementById("choice2").value.toLowerCase();
    const myQuestion = document.getElementById("question");

    if (answer === "run") {
        document.getElementById("mainImage").src = "img/360_F_257323518_pYwv9eGS4fI7W7hffirqoM8Oa4Ej0HUg.jpg";
        myQuestion.innerHTML = "You begin to gain speed and run towards the open landscape, the sun barely peaks from the horizon, as the moon becomes the only source of light you have.";

        document.getElementById("choice2").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice3").style.display = "block";
        document.getElementById("btnSubmit3").style.display = "block";

        toggleInput(currentStep);
        currentStep++;
    } else if (answer === "pull pistol out") {
        document.getElementById("choice2").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice3").style.display = "block";
        document.getElementById("btnSubmit2").style.display = "block";

        myQuestion.innerHTML = "You quickly pull out your pistol, but you see no one in sight except for the landscape of a desert land. The sun peaks over the horizon, the moon soon rises. It's silent.";
    } else {
        myQuestion.innerHTML = "Invalid answer";
    }
}

function getChoice3() {
    const answer = document.getElementById("choice3").value.toLowerCase();
    const myQuestion = document.getElementById("question");

    if (answer === "look behind") {
        document.getElementById("mainImage").src = "img/istockphoto-1366577983-640x640.jpg";
        myQuestion.innerHTML = "You notice an icy breath against your neck, your skin crawls. You slowly turn around to come face to face with the man. His eyes fully visible and gleaming. His grin even bigger than before, but his teeth... Sharp with fangs. Before you can act, you feel his fangs buried deep into your flesh. Blood leaves your body. Weakness overtakes you. Darkness rushes over.";

        document.getElementById("choice2").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice3").style.display = "block";
        document.getElementById("btnSubmit2").style.display = "block";

        toggleInput(currentStep);
        currentStep++;
    } else if (answer === "rest") {
        document.getElementById("mainImage").src = "img/istockphoto-1366577983-640x640.jpg";
        document.getElementById("choice3").style.display = "none";
        document.getElementById("btnSubmit").style.display = "none";

        document.getElementById("choice4").style.display = "block";
        document.getElementById("btnSubmit3").style.display = "block";

        myQuestion.innerHTML = "You drop to the ground, exhausted. Your eyelids lower, your breath steady as you lay on the ground. As you lay and attempt to rest, you feel a cold, icy breath on your neck. You quickly open your eyes to be faced with the Strange Man, now with sharp fangs showing. You try to scream for help but you're quickly hushed with a hand. You're too tired to push back, and are forced to feel the piercing agony of fangs ripping into your flesh. You stare into the stars that shine above as you fade into darkness.";
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
    document.getElementById("choice").value = "";
    document.getElementById("question").innerHTML = "You find that this land holds nothing but death and monsters";
    document.getElementById("mainImage").src = "img/WESTERNDESERTEDIT-1-of-1-22-689x639.jpg";

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`choice${i}`).value = "";
        document.getElementById(`choice${i}`).style.display = "none";
        document.getElementById(`btnSubmit${i}`).style.display = "none";
    }
}


//------------------------------------------------------------------------------------------
