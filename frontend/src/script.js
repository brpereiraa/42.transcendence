"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
    if (!timerElement) {
        console.error("Timer element not found");
        return; // Exit if element does not exist
    }
    let seconds = 0;
    function formatTime(sec) {
        const m = String(Math.floor(sec / 60)).padStart(2, '0');
        const s = String(sec % 60).padStart(2, '0');
        return `${m}:${s}`;
    }
    setInterval(() => {
        seconds++;
        timerElement.textContent = ` ${formatTime(seconds)}`;
    }, 1000);
});
