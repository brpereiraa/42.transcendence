const register = () => {
  return (`
    <div class="relative z-10 w-full h-full flex items-center justify-center">
      <div class="w-full max-w-md bg-black/30 rounded-2xl shadow-lg p-8 space-y-1">
        <h2 class="text-3xl font-bold text-purple-600 text-center text-outline">Register</h2>
        <form action="/login" method="POST" class="space-y-5">
          <div>
            <label for="email" class="block text-sm font-bold text-purple-600 text-outline">Insert your email</label>
            <input type="email" id="email" name="email" required
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-900 bg-black/20" />
          </div>
          <div>
            <label for="password" class="block text-sm font-bold text-purple-600 text-outline">Insert your username</label>
            <input type="password" id="password" name="password" required
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-900 bg-black/20" />
          </div>
          <div>
            <label for="password" class="block text-sm font-bold text-purple-600 text-outline">Insert your password</label>
            <input type="password" id="password" name="password" required
              class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white-900 bg-black/20" />
          </div>
        </form>
        <a href="/login" class="block w-full bg-gray-400 text-gray-800 py-2  rounded-lg hover:bg-gray-300 transition duration-200 text-center">
          Register
        </a>
      </div>
    </div>  
  `)
}

export default register