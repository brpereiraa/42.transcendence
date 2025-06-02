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

const routes = {
    "/" : "/index.html",
    "/play": "/pages/play.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then(res => res.text());
    document.getElementById("main-page").innerHTML = html;
};
window.onpopstate = handleLocation;

handleLocation(); // Initial call to load the content based on the current path
