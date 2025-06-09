import play from "../pages/play.js"
import local from "../pages/local.js";
import multiplayer from "../pages/multiplayer.js"
import register from "../pages/register.js";
import game from "../pages/game.js"
import teste from "../pages/teste.js"
import page404 from "../pages/page404.js"
import testing from "../pages/testing.js"

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];

  let html = "";

  if (typeof route === "function") {
    html = route();
  } else if (typeof route === "string") {
    html = await fetch(route).then(res => res.text());
  }

  document.getElementById("main-page").innerHTML = html;
  attachProfilePicListener();
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        const link = event.target.closest("a");
        if (link && link.href.startsWith(window.location.origin)) {
            event.preventDefault();
            window.history.pushState({}, "", link.href);
            handleLocation();
        }
    });

    // Initial load
    handleLocation();
});

function attachProfilePicListener() {
    const input = document.getElementById('pfpInput');
    const button = document.getElementById('editPfpBtn');
    const profilePic = document.getElementById('profilePic');
  
    if (!input || !button || !profilePic) return;
  
    // Handle file input change (when user selects a new image)
    input.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = (e) => {
        profilePic.src = e.target.result;
        localStorage.setItem('profilePic', e.target.result); // Save image to localStorage
      };
      reader.readAsDataURL(file);
    });
  
    // Load saved profile pic if available
    const savedPic = localStorage.getItem('profilePic');
    if (savedPic) {
      profilePic.src = savedPic;
    }
  
    // Click pencil icon to trigger file input
    button.addEventListener('click', () => {
      input.click();
    });
  }
  

const routes = {
    "/" : "/index.html",
    "/play": play,
    "/profile": "/pages/profile.html",
    "/leaderboard": "/pages/leaderboard.html",
    "/login": "/pages/login.html",
    "/index": "../index.html",
    "/local": local,
    "/1vs1local": "/pages/1vs1local.html",
    "/multiplayer": multiplayer,
    "/1vs1": "/pages/1vs1.html",
    "/register": register,
    "/friends": "/pages/friends.html",
    "/game": game,
    "/teste": teste,
    "/testing": testing,
    "404": page404
};


window.onpopstate = handleLocation;

handleLocation(); // Initial call to load the content based on the current path
