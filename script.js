function showMessage() {
    document.getElementById("message").innerHTML =
    "Thank you for visiting my portfolio 💜";
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

function submitForm(event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value;
    const formMessage = document.getElementById("formMessage");
    formMessage.innerHTML = `Thank you, ${name}! Your message has been received 💜`;
    document.getElementById("contactForm").reset();
}