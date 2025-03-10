document.addEventListener("DOMContentLoaded", function () {
    // Load the page based on the current hash (if any)
    if (window.location.hash) {
        loadPage(window.location.hash.substring(1)); // Remove #
    } else {
        loadPage("home"); // Default page
    }

    fetch("./components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
            setupNavbarLinks();
        })
        .catch(error => console.error("Error loading navbar:", error));

    // Listen for hash changes
    window.addEventListener("hashchange", function () {
        loadPage(window.location.hash.substring(1)); // Load page based on hash
    });
});

function setupNavbarLinks() {
    document.getElementById("navbar").addEventListener("click", function (event) {
        const link = event.target.closest("a[data-page]");
        if (!link) return;
        event.preventDefault();
        
        let page = link.getAttribute("data-page");
        window.location.hash = page; // Update URL hash
        loadPage(page);
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
