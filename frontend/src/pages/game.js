import * as scripts from "../scripts/game_script.js";
const game = () => {
    const renderGame = async () => {
        const response = await fetch('http://localhost:3001/api/users', {
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        const player1 = document.getElementById("player1");
        if (player1)
            player1.innerHTML = data[0].name;
        const player2 = document.getElementById("player2");
        if (player2)
            player2.innerHTML = data[0].name;
        scripts.drawPong();
    };
    setTimeout(renderGame, 0);
    return (`
        <div class="w-full">
            <div class="w-full text-center mb-10"> 
                <h1 class="text-7xl"> 1 - 0 </h1> 
            </div>
            <div class="flex max-w-1000">
                <div class="mx-auto mt-20">
                    <img src="./images/bentley.png" class="w-40 h-40 rounded-xl object-cover"/>
                    <h1 class="text-center mt-4" id="player1">...</h1>
                </div>
                <canvas id="pong" width="900" height="500" class="mx-auto border-solid border-4 border-b-teal-500 border-r-teal-500" style="background-color:rgba(255,255,255,0.9)"> </canvas>
                <div class="mx-auto mt-20">
                    <img src="./images/murry.png" class="w-40 h-40 rounded-xl object-cover"/>
                    <h1 class="text-center mt-4" id="player2">...</h1>
                </div>
            </div>
        </div>
    `);
};
export default game;
