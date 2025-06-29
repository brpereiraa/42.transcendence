const oneononelocal = () => {
    return `
  
  <div>
    <button id="openChat"
        class="fixed bottom-4 right-4 bg-gray-600 text-white px-4 py-2 rounded-full shadow-lg z-50">
        Chat
    </button>
    <div id="chatPanel"
    class="fixed bottom-0 right-0 w-80 h-96 bg-white shadow-lg transform translate-x-full transition-transform duration-300 z-40 rounded-tl-xl">
    <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-lg font-semibold">Chat</h2>
        <button id="closeChat" class="text-gray-500 hover:text-gray-800">&times;</button>
    </div>
    </div>
    <div class="content_div flex justify-center items-center gap-8 mt-10">
    <!-- Left Square -->
    <div class="relative z-10 flex items-center justify-center">
        <div class="w-full max-w-md bg-black/30 rounded-2xl shadow-lg p-8 space-y-5">
            <h2 class="text-3xl font-bold text-purple-400 text-center text-outline">Matchmaking</h2>
            <div class="flex justify-center items-center gap-6">
                <!-- Player 1 -->
                <div class="flex flex-col items-center">
                    <img src="../images/bentley.png" alt="Player 2" class="w-28 h-28 square-full object-cover border-4 border-blue-400" />
                    <span class="text-purple-400 font-bold text-outline mt-2">vasco2</span>
                </div>
            
                <!-- VS text -->
                <div class="flex flex-col items-center px-4">
                    <div class="text-white text-5xl font-extrabold text-outline">VS</div>
                    </div>
            
                <!-- Player 2 -->
                <div class="flex flex-col items-center">
                    <img src="../images/murry.png" alt="Player 3" class="w-28 h-28 square-full object-cover border-4 border-blue-400" />
                    <span class="text-purple-400 font-bold text-outline mt-2">vasco1</span>
                </div>
            </div>
            
            </div>
        </div>
    </div>     
    <div class="absolute top-[70%] left-1/2 transform -translate-x-1/2 z-50">
        <div class="flex flex-col items-center gap-4">
            <a href="/game">
            <button type="submit"
                class="w-60 h-14 font-semibold text-3xl bg-purple-600 text-white py-2 hover:bg-purple-400 transition duration-200 outline-double outline-gray-500 rounded-lg">
                Play
            </button>
        </a>
        <a href="/local">
            <button type="submit"
                class="w-60 h-14 font-semibold text-3xl bg-purple-600 text-white py-2 hover:bg-purple-400 transition duration-200 outline-double outline-gray-500 rounded-lg">
                Back ↩
            </button>
        </a>
        </div>
        </div>              
  </div>
    `;
};
export default oneononelocal;
