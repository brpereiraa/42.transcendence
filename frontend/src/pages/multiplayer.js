const multiplayer = () => {
    return (`
    <div>
      <div>
        <button id="openChat" class="fixed bottom-4 right-4 bg-gray-600 text-white px-4 py-2 rounded-full shadow-lg z-50">
          Chat
        </button>
      </div>
      <div class="relative flex justify-center items-center w-full h-full">
        <div class="flex flex-col gap-8">
          <a href="/1vs1" onclick="route()" class="text-center w-60 h-14 font-semibold text-3xl bg-purple-600 text-white py-2 hover:bg-purple-400 transition duration-200 outline-double outline-gray-500 rounded-lg opacity-80 text-outline text-outline">
            Player vs Player
          </a>
          <a href="/play" onclick="route()" class="text-center w-60 h-14 font-semibold text-3xl bg-purple-600 text-white py-2 hover:bg-purple-400 transition duration-200 outline-double outline-gray-500 rounded-lg opacity-80 text-outline text-outline">
              Tournament
          </a>
          <a href="/play" onclick="route()" class="text-center w-60 h-14 font-semibold text-3xl bg-purple-600 text-white py-2 hover:bg-purple-400 transition duration-200 outline-double outline-gray-500 rounded-lg opacity-80 text-outline">
            Back ↩
          </a> 
        </div>
      </div>
    </div> 
  `);
};
export default multiplayer;
