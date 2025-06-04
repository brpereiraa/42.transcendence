document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('timer');
  
    if (!timerElement) {
      console.error("Timer element not found");
      return; // Exit if element does not exist
    }
  
    let seconds = 0;
  
    function formatTime(sec: number): string {
      const m = String(Math.floor(sec / 60)).padStart(2, '0');
      const s = String(sec % 60).padStart(2, '0');
      return `${m}:${s}`;
    }
  
    setInterval(() => {
      seconds++;
      timerElement.textContent = ` ${formatTime(seconds)}`;
    }, 1000);
  });
  
// async function createUser(name: string, password: string) {
//   try {
//     const response = await fetch('http://localhost:3001/api/user', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, password }),
//     });

//     if (!response.ok) {
//       throw new Error(`Server error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('User created:', data);
//     return data;
//   } catch (error) {
//     console.error('Error creating user:', error);
//     throw error;  // rethrow if caller wants to handle it
//   }
// }