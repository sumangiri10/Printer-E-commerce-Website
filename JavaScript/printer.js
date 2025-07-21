// JavaScript to handle form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Great! Your feedback has been submitted.");
    document.getElementById("contactForm").reset();
  });
