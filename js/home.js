document.addEventListener("DOMContentLoaded", function () {
    fetch("./pages/home.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("home").innerHTML = data;
        })
        .catch(error => console.error("Error loading home:", error));
});
