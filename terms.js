function showTermsPage() {
    document.getElementById("termsPage").classList.remove("hidden");
    document.getElementById("acceptedPage").classList.add("hidden");
}

function showAcceptedPage() {
    document.getElementById("termsPage").classList.add("hidden");
    document.getElementById("acceptButton").classList.add("hidden");
    document.getElementById("header").classList.add("hidden");
    document.getElementById("acceptedPage").classList.remove("hidden");
}

document.getElementById("acceptButton").addEventListener("click", function() {
    showAcceptedPage();
    localStorage.setItem("termsAccepted", "true");
});

if (localStorage.getItem("termsAccepted") === "true") {
    showAcceptedPage();
} else {
    showTermsPage();
}