function showMessage() {
    document.getElementById("message").innerHTML =
    "Thank you for visiting my portfolio 💜";
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}