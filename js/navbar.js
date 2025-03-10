document.addEventListener("DOMContentLoaded", function () {
    fetch("./components/navbar.html") 
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
            setupNavbarLinks();
        })
        .catch(error => console.error("Error loading navbar:", error));

    // Load home page by default
    loadPage("home");
});

function setupNavbarLinks() {
    document.getElementById("navbar").addEventListener("click", function (event) {
        const link = event.target.closest("a[data-page]");
        if (!link) return;
        event.preventDefault();
        loadPage(link.getAttribute("data-page"));
    });
}

function loadPage(page) {
    fetch(`./pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${page}:`, error));
}
