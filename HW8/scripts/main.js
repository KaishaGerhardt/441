$(document).ready(function() {
    const images = ["images/colormoving.gif", "images/colormoving2.gif", "images/colormoving3.gif"];
    const texts = ["Gaslight", "Gatekeep", "Girlboss."];
    let currentImageIndex = 0;
    let currentTextIndex = 0;

    function cycleImages() {
        $('#imageContainer').css('background-image', `url(${images[currentImageIndex]})`).animate({opacity: 1}, 1000, function() {
            setTimeout(() => {
                $(this).animate({opacity: 0}, 1000);
                currentImageIndex = (currentImageIndex + 1) % images.length;
                cycleImages(); // Recursive call
            }, 3000);
        });
    }

    function cycleText() {
        const text = texts[currentTextIndex];
        $('#textContainer').text(text).animate({opacity: 1, fontSize: '3em'}, 1000, function() {
            setTimeout(() => {
                $(this).animate({opacity: 0, fontSize: '2em'}, 1000);
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                cycleText(); // Recursive call
            }, 3000);
        });
    }

    function createShapes() {
        for (let i = 0; i < 5; i++) {
            const size = Math.random() * 100 + 50; // Random size between 50 and 150
            const shape = $('<div class="shape"></div>').css({
                width: size,
                height: size,
                top: Math.random() * $(window).height(),
                left: Math.random() * $(window).width()
            });

            $('#artContainer').append(shape);

            // Move and fade shapes
            (function animateShape(shape) {
                shape.animate({
                    top: Math.random() * $(window).height(),
                    left: Math.random() * $(window).width(),
                    opacity: 1
                }, 2000, function() {
                    shape.animate({opacity: 0}, 1000, function() {
                        animateShape(shape); // Recursive call for endless movement
                    });
                });
            })(shape);
        }
    }

    cycleImages();
    cycleText();
    createShapes();
});

