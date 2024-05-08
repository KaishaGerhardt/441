const storyTexts = [
    "khdsfkhdkfhsodfsduhfodsuho...",
    "The wind howled outside as I sat alone in my room...",
    "Suddenly, I heard a creaking sound...",
    "My heart raced as I felt a chill run down my spine...",
    "I knew I was not alone...",
    "The shadows seemed to move, whispering secrets...",
    "I tried to run, but I couldn't escape...",
    "In the darkness, I saw its eyes...",
    "Game over! Click restart to play again."
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
  
  document.addEventListener("DOMContentLoaded", function() {
    fadeInOutBlur(); // Start the blur effect
    typeWriter(); // Start typing the story text
  });
  
  function fadeInOutBlur() {
    const storyImage = document.getElementById('storyImage');
  
    setInterval(function() {
      storyImage.classList.toggle('blur');
    }, 3000);
  }
  
  function typeWriter() {
    const typingSpeed = 50; // Speed in milliseconds
  
    let index = 0;
    const interval = setInterval(function() {
      storyTextElement.innerText += storyTexts[currentPage][index];
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
      const storyImage = document.getElementById('storyImage');
      storyImage.src = images[currentPage];
      storyImage.classList.remove('blur');
      storyTextElement.innerText = '';
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
    storyTextElement.innerText = '';
    restartButton.classList.add('hidden');
    typeWriter();
  }