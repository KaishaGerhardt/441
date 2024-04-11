class GameObject {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // Check collision with another object
    collide(object) {
        const dx = this.x - object.x;
        const dy = this.y - object.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.radius + object.radius;
    }
}

class Player extends GameObject {
    constructor(x, y, radius, color, speed) {
        super(x, y, radius, color);
        this.speed = speed;
    }

    move(direction) {
        switch(direction) {
            case 'up':
                this.y -= this.speed;
                break;
            case 'down':
                this.y += this.speed;
                break;
            case 'left':
                this.x -= this.speed;
                break;
            case 'right':
                this.x += this.speed;
                break;
        }
    }

    // Prevent player from going out of canvas bounds
    stayInBounds(canvas) {
        if (this.x - this.radius < 0) {
            this.x = this.radius;
        }
        if (this.x + this.radius > canvas.width) {
            this.x = canvas.width - this.radius;
        }
        if (this.y - this.radius < 0) {
            this.y = this.radius;
        }
        if (this.y + this.radius > canvas.height) {
            this.y = canvas.height - this.radius;
        }
    }
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create player
const player = new Player(50, canvas.height / 2, 20, 'blue', 5);

// Array to store collectible objects
let collectibles = [];

// Generate random collectibles
function generateCollectibles() {
    for (let i = 0; i < 3; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 15;
        const color = 'green';
        collectibles.push(new GameObject(x, y, radius, color));
    }
}

// Scoring system
let score = 0;

// Display score on canvas
function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 10, 30);
}

// Event listener for player movement
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            player.move('up');
            break;
        case 'ArrowDown':
            player.move('down');
            break;
        case 'ArrowLeft':
            player.move('left');
            break;
        case 'ArrowRight':
            player.move('right');
            break;
    }
    player.stayInBounds(canvas);
});

// Check collision between player and collectibles
function checkCollision() {
    collectibles.forEach((collectible, index) => {
        if (player.collide(collectible)) {
            collectibles.splice(index, 1); // Remove collected collectible
            score++; // Increase score
        }
    });
}

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    player.draw(ctx);

    // Draw collectibles
    collectibles.forEach(collectible => {
        collectible.draw(ctx);
    });

    // Draw score
    drawScore();

    checkCollision();
    requestAnimationFrame(gameLoop);
}

generateCollectibles();
gameLoop();
