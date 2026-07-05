const canvas = document.getElementById("cakeCanvas");
const img = document.querySelector(".image1");
const ctx = canvas.getContext("2d");

function setupCanvas() {
    const rect = img.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;

    drawCake();
}

window.addEventListener("load", setupCanvas);
window.addEventListener("resize", setupCanvas);

function drawCake() {
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // 🎯 CAKE POSITION (move everything here)
    const cakeX = w * 0.54;
    const cakeY = h * 0.69;

    const cakeWidth = w * 0.42;
    const cakeHeight = h * 0.17;

    // ======================
    // 🎂 CAKE BASE
    // ======================
    ctx.fillStyle = "#8f501d";
    ctx.fillRect(cakeX, cakeY, cakeWidth, cakeHeight);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeRect(cakeX, cakeY, cakeWidth, cakeHeight);

    // ======================
    // 🍰 FROSTING
    // ======================
    const frostingHeight = cakeHeight * 0.25;

    ctx.fillStyle = "#e0afc7";
    ctx.fillRect(cakeX, cakeY - frostingHeight, cakeWidth, frostingHeight);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeRect(cakeX, cakeY - frostingHeight, cakeWidth, frostingHeight);

    // ======================
    // 🕯️ CANDLES
    // ======================
    const candleCount = 5;
    const spacing = cakeWidth / (candleCount + 1);

    for (let i = 0; i < candleCount; i++) {
        const x = cakeX + spacing * (i + 1);
        const candleBaseY = cakeY - cakeHeight * 0.7;

        const candleWidth = w * 0.015;
        const candleHeight = h * 0.10;

        // candle body
        ctx.fillStyle = "#7cc7ff";
        ctx.fillRect(x, candleBaseY, candleWidth, candleHeight);

        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, candleBaseY, candleWidth, candleHeight);

        // flame
        drawFlame(x + candleWidth / 2, candleBaseY - 10);
    }
}

// ======================
// 🔥 FLAME (outlined)
// ======================
function drawFlame(x, y) {
    ctx.beginPath();

    ctx.fillStyle = "orange";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x - 6, y - 18, x, y - 30);
    ctx.quadraticCurveTo(x + 6, y - 18, x, y);

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

const button = document.getElementById("openCardBtn");
const card = document.getElementById("birthdayCard");

button.addEventListener("click", () => {
    card.classList.toggle("open");
});