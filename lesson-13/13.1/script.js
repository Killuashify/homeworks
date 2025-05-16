document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector('input[name="name"]').value.trim();
  const message = document
    .querySelector('textarea[name="message"]')
    .value.trim();
  const phone = document.querySelector('input[name="phone"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();

  clearErrors();

  let hasError = false;

  if (!validateName(name)) hasError = true;
  if (!validateMessage(message)) hasError = true;
  if (!validatePhone(phone)) hasError = true;
  if (!validateEmail(email)) hasError = true;

  if (!hasError) {
    console.log({ name, message, phone, email });
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
  }
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));
}

function validateName(value) {
  const nameRegex = /^[A-Za-z]{2,}$/;
  if (!nameRegex.test(value)) {
    showError("nameError", "Only Latin letters, no symbols at start/end");
    return false;
  }
  showError("nameError", "");
  return true;
}

function validateMessage(value) {
  const messageRegex = /^.{5,}$/;
  if (!messageRegex.test(value)) {
    showError("messageError", "Message must be at least 5 characters");
    return false;
  }
  showError("messageError", "");
  return true;
}

function validatePhone(value) {
  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(value)) {
    showError("phoneError", "Phone must start with +380 and be 13 digits long");
    return false;
  }
  showError("phoneError", "");
  return true;
}

function validateEmail(value) {
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];
  const domain = value.split("@")[1] || "";
  if (!emailRegex.test(value) || !allowedDomains.includes(domain)) {
    showError(
      "emailError",
      "Only valid emails like gmail.com, yahoo.com, etc."
    );
    return false;
  }
  showError("emailError", "");
  return true;
}

document.querySelector('input[name="name"]').addEventListener("input", (e) => {
  validateName(e.target.value.trim());
});

document
  .querySelector('textarea[name="message"]')
  .addEventListener("input", (e) => {
    validateMessage(e.target.value.trim());
  });

document.querySelector('input[name="phone"]').addEventListener("input", (e) => {
  validatePhone(e.target.value.trim());
});

document.querySelector('input[name="email"]').addEventListener("input", (e) => {
  validateEmail(e.target.value.trim());
});
