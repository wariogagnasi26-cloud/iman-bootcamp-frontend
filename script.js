const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for contacting IMAN Bootcamp!");

    form.reset();
});
const menuToggle = document.getElementById("menuButton");
const navList = document.querySelector("nav ul");
menuToggle.addEventListener("click", function() {
    navList.classList.toggle("show");
});
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {
        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(function(project) {
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");

    this.reset();
});
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});