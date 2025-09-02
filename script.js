function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Basic feedback message
  const name = document.getElementById("name").value;
  const messageBox = document.getElementById("form-message");

  if (name.trim()) {
    messageBox.textContent = `Thanks for reaching out, ${name}!`;
    this.reset();
  } else {
    messageBox.textContent = "Please enter your name.";
  }
});
