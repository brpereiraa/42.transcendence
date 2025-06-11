import chat from "../components/chat.js"

const play = () => {
  return (`
    <div>
      <div class="relative flex justify-center items-center w-full h-full flex-col gap-8">
        <a href="/local"   class="text-center w-60 h-14 font-semibold text-3xl bg-purple-600 text-white py-2 hover:bg-purple-400 transition duration-200 outline-double outline-gray-500 rounded-lg opacity-80 text-outline text-outline">
          Local
        </a>
        <a href="/multiplayer" class="text-center w-60 h-14 font-semibold text-3xl bg-purple-600 text-white py-2 hover:bg-purple-400 transition duration-200 outline-double outline-gray-500 rounded-lg opacity-80 text-outline text-outline">
          Multiplayer
        </a> 
        <a href="cpu.html" class="text-center w-60 h-14 font-semibold text-3xl bg-purple-600 text-white py-2 hover:bg-purple-400 transition duration-200 outline-double outline-gray-500 rounded-lg opacity-80 text-outline text-outline">
          CPU
        </a>
        <a href="/index" class="text-center w-60 h-14 font-semibold text-3xl bg-purple-600 text-white py-2 hover:bg-purple-400 transition duration-200 outline-double outline-gray-500 rounded-lg opacity-80 text-outline text-outline">
          Back ↩
        </a> 
      </div>
    </div>
  `)
}

export default play
