const socket = new WebSocket("ws://localhost:3002");
socket.addEventListener("open", () => {
    console.log("Connected to WebSocket server");
    socket.send("Hello from client");
});
socket.addEventListener("message", (event) => {
    console.log("Message from server:", event.data);
});
socket.addEventListener("close", () => {
    console.log("Connection closed");
});
socket.addEventListener("error", (err) => {
    console.error("WebSocket error", err);
});
let ball = {
    color: "white",
    x: 450,
    y: 250,
    radius: 10,
    speedX: 3,
    speedY: 2,
};
let paddles = {
    one: 200,
    two: 200,
};
export const drawPong = () => {
    const canvas = document.getElementById('pong');
    if (!canvas)
        return;
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return;
    const drawFrame = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(20, paddles.one, 10, 100);
        ctx.fillRect(canvas.width - 30, paddles.two, 10, 100);
        ball.x += ball.speedX;
        ball.y += ball.speedY;
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
            ball.speedY *= -1;
        }
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
            ball.speedX *= -1;
        }
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.closePath();
        requestAnimationFrame(drawFrame);
    };
    drawFrame();
};
