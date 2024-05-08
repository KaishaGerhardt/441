const storyTexts = [
    "I wake up at the same damn time every night in a cold sweat. The darkness fills my room, distorting everything.",
    "I keep thinking I see things lurking in the dark",
    "I tell myself it is nothing but shadows and shapes",
    "That my eyes are playing tricks on me",
    "Heart racing, I try going back to sleep",
    "I can't, my body freezes and all I can do is make eye contact with the darkness",
    "It's just a dream - I whisper",
    "No, it's not - it answers",
  ];
  
  const images = [
    "images/scary story images/sleepy.JPG", 
    "images/scary story images/closet I.JPG", 
    "images/scary story images/awake.JPG", 
    "images/scary story images/closet II.JPG", 
    "images/scary story images/notice.JPG", 
    "images/scary story images/closet III.JPG", 
    "images/scary story images/closet IIII.JPG", 
    "images/scary story images/monster.JPG"
  ];
  
let currentPage = 0;
const storyTextElement = document.getElementById('storyText');
const nextButton = document.getElementById('nextButton');
const restartButton = document.getElementById('restartButton');
const storyImage = document.getElementById('storyImage');

document.addEventListener("DOMContentLoaded", function() {
  fadeInOutBlur(); // Start the blur effect
  typeWriter(); // Start typing the story text
});

function fadeInOutBlur() {
  setInterval(function() {
    storyImage.classList.toggle('blur');
  }, 3000);
}

function typeWriter() {
  const typingSpeed = 50; // Speed in milliseconds

  let index = 0;
  const interval = setInterval(function() {
    storyTextElement.innerHTML += storyTexts[currentPage][index];
    index++;
    if (index === storyTexts[currentPage].length) {
      clearInterval(interval);
      nextButton.classList.remove('hidden');
      if (currentPage === storyTexts.length - 1) {
        restartButton.classList.remove('hidden');
      }
    }
  }, typingSpeed);
}

function nextPage() {
  currentPage++;
  if (currentPage < images.length) {
    storyImage.src = images[currentPage];
    storyTextElement.innerHTML = '';
    nextButton.classList.add('hidden');
    typeWriter();
  } else {
    alert("End of story!");
  }
}

function restart() {
  currentPage = 0;
  storyImage.src = images[currentPage];
  storyTextElement.innerHTML = 'hidden';
  restartButton.classList.add('hidden');
  typeWriter();
}

function shakeText() {
  storyTextElement.style.animation = 'shake 0.5s ease-in-out';
  setTimeout(function() {
    storyTextElement.style.animation = '';
  }, 500);
}

function nextPage() {
  currentPage++;
  if (currentPage < images.length) {
    const storyImage = document.getElementById('storyImage');
    storyImage.src = images[currentPage];
    storyImage.classList.remove('blur');
    storyTextElement.innerHTML = '';
    nextButton.classList.add('hidden');
    typeWriter();
  } else {
    alert("End of story!");
  }
}

function restart() {
  currentPage = 0;
  const storyImage = document.getElementById('storyImage');
  storyImage.src = images[currentPage];
  storyImage.classList.remove('blur');
  storyTextElement.innerHTML = '';
  restartButton.classList.add('hidden');
  typeWriter();
}