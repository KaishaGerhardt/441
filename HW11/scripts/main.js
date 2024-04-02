// Class for game objects
class GameObject {
    constructor(x, y, radius, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = dx;
        this.dy = dy;
    }

    // Draw object on canvas
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // Update object position and check collisions
    update(canvas, player) {
        // Move object
        this.x += this.dx;
        this.y += this.dy;

        // Prevent object from leaving canvas edges
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // Check collision with player object
        if (this !== player && this.collide(player)) {
            // Change background color
            canvas.style.backgroundColor = 'red';
            // Increase object size
            this.radius += 2;
            player.radius += 2;
        } else {
            canvas.style.backgroundColor = 'lightgray'; // Reset background color
        }
    }

    // Check collision with another object
    collide(object) {
        const dx = this.x - object.x;
        const dy = this.y - object.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < this.radius + object.radius;
    }
}

// Initialize canvas and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Create player object
const player = new GameObject(100, 100, 20, 'blue', 0, 0);

// Create autonomous object
const autonomousObject = new GameObject(400, 300, 30, 'green', 2, 2);

// Event listener for user control
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowLeft':
            player.dx = -2;
            break;
        case 'ArrowRight':
            player.dx = 2;
            break;
        case 'ArrowUp':
            player.dy = -2;
            break;
        case 'ArrowDown':
            player.dy = 2;
            break;
    }
});

document.addEventListener('keyup', () => {
    player.dx = 0;
    player.dy = 0;
});

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw player object
    player.update(canvas, autonomousObject);
    player.draw(ctx);

    // Update and draw autonomous object
    autonomousObject.update(canvas, player);
    autonomousObject.draw(ctx);

    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
