function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    var answer3 = document.getElementById("choice3").innerHTML;

    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Strange Man: Ha! Being honest can get you killed out here";
        document.getElementById("choice1").innerHTML = "Reach for your pistol";
        document.getElementById("choice2").innerHTML = "Walk away";
        document.getElementById("choice3").innerHTML = "Stay Silent";

    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = " The strange man chuckles, you catch a quick glimpse of his eyes, yellow and bright. He says: I like you. ";
        document.getElementById("choice1").innerHTML = "Draw your pistol and point it at the man";
        document.getElementById("choice2").innerHTML = "Start running";

    } else if (choice == 1 && answer1 == "Draw your pistol and point it at the man") {
        document.getElementById("story").innerHTML = " You're bold, pointing that pistol all willy nilly. Perhaps you should be more aware of who your point your gun at. The moment you blink, the man is gone without a trace. ";
        document.getElementById("choice1").innerHTML = "Look behind you";
        document.getElementById("choice2").innerHTML = "Start running";
        document.getElementById("choice3").innerHTML = "Lower the pistol";

    } else if (choice == 3 && answer3 == "Lower the pistol") {
        document.getElementById("story").innerHTML = "As you lower the pistol, you feel a cold embrace from behind. a strong grip holds you tight, and suddenly you feel a sharp pain deep into your neck. Blood trails down, and grow weaker and weaker. You have no strength to fight this creature. All you can do is close your eyes and let the darkness take you.";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
        document.getElementById("choice3").innerHTML = "";


     } else if (choice == 1 && answer1 == "Reach for your pistol") {
            document.getElementById("story").innerHTML = "Strange Man: I wouldn't do that if I were you...";
            document.getElementById("choice1").innerHTML = "Draw your pistol and point it at the man";
            document.getElementById("choice2").innerHTML = "Start running";
            document.getElementById("choice3").innerHTML = "Stay Silent";



    } else if (choice == 2 && answer2 == "Walk away") {
        document.getElementById("story").innerHTML = " You hear laughter from the strange man as you turn around to walk away";
        document.getElementById("choice1").innerHTML = "Draw your pistol and fire at the man";
        document.getElementById("choice2").innerHTML = "Start running";
        document.getElementById("choice3").innerHTML = "Ignore him and continue walking";


    } else if (choice == 3 && answer3 == "Ignore him and continue walking") {
        document.getElementById("story").innerHTML = "You continue walking, you see nothing on the horizon, except for the sun setting and the stars rising. Otherwise, there is nothing.";
        document.getElementById("choice1").innerHTML = "Rest";
        document.getElementById("choice2").innerHTML = "Start running";
        document.getElementById("choice3").innerHTML = "Look behind you";


    } else if (choice == 3 && answer3 == "Stay Silent") {
        document.getElementById("story").innerHTML = "Strange Man: Quiet, are we? smart";
        document.getElementById("choice1").innerHTML = "Draw your pistol and point it at the man";
        document.getElementById("choice2").innerHTML = "Start running";
        document.getElementById("choice3").innerHTML = "Do not speak";

    } else if (choice == 3 && answer3 == "Do not speak") {
        document.getElementById("story").innerHTML = "Strange Man: You seem like the type that has the drive to survive in a place like this out here. Perhaps, I can give you a head start - The Strange Man steps aside and signals you ahead of him - I'll give you 10 seconds head start - He pulls out a watch - 10........9........8..........";
        document.getElementById("choice1").innerHTML = "Draw your pistol and point it at the man";
        document.getElementById("choice2").innerHTML = "Start running";
        document.getElementById("choice3").innerHTML = "Walk Away";

    } else if (choice == 2 && answer2 == "Start running") {
        document.getElementById("story").innerHTML = "You begin to gain speed and run towards the open landscape, the sun barely peaks from the horizon, as the moon becomes the only source of light you have.";
        document.getElementById("choice1").innerHTML = "Rest";
        document.getElementById("choice2").innerHTML = "Look behind you";
        document.getElementById("choice3").innerHTML = "Keep Running";


    } else if (choice == 1 && answer1 == "Rest") {
        document.getElementById("story").innerHTML = "You drop to the ground, exhausted. Your eyelids lower, you breath has steady as you lay on the ground. As you lay and attempt to rest, you feel a cold, icy breath on your neck. You quickly open your eyes to be faced with the Strange Man, now with sharp fangs showing. You try to scream for help but your quickly hushed with a hand. You're too tired to push back, and is forced to feel the piercing agony of fangs ripping into your flesh. You star into the stars that shine above as you fade into darkness" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
        document.getElementById("choice3").innerHTML = "";
        // first question//

    } else if (choice == 1 && answer1 == "Draw your pistol and fire at the man") {
        document.getElementById("story").innerHTML = "You quickly turn around, pistol out, but you see no one in sight except for the landscape of a desert land. The sun peaks over the horizon, the moon soon rises. Its silent.";
        document.getElementById("choice1").innerHTML = "Look behind you";
        document.getElementById("choice2").innerHTML = "Start running";
        document.getElementById("choice3").innerHTML = "Lower the pistol";

    } else if (choice == 1 && answer1 == "Look behind you") {
        document.getElementById("story").innerHTML = "You noticed that you feel an icy breath agaisnt your neck, your skin crawls. You slowly turn behind to come face to face with the man. His eyes fully visable and gleaming. His grin even bigger than before, but his teeth....Sharp with fangs. Before you can act, you find his fangs burried deep into your flesh. Blood leaves your body. Weak. You feel the darkness rush over.";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
        document.getElementById("choice3").innerHTML = "";

    } else if (choice == 2 && answer2 == "Look behind you") {
        document.getElementById("story").innerHTML = "You noticed that you feel an icy breath agaisnt your neck, your skin crawls. You slowly turn behind to come face to face with the man. His eyes fully visable and gleaming. His grin even bigger than before, but his teeth....Sharp with fangs. Before you can act, you find his fangs burried deep into your flesh. Blood leaves your body. Weak. You feel the darkness rush over.";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
        document.getElementById("choice3").innerHTML = "";

    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "You awaken on the warm dirt covered ground, your head pounds and your sight blurry. Its takes you a moment to gain your footing and focus your eyes. You stumble up from the ground to be faced with a Strange Man. His eyes, hidden by brim of his hat. His teeth beared and grinning. He walks up to you. Howdy There Partner, Ye seem lost?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
        document.getElementById("choice3").innerHTML = "Stay Silent";

    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "You find that this land holds nothing but death and monsters";
        

    }


}