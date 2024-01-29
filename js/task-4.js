const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const emailValue = e.currentTarget.elements.email.value;
  const passwordValue = e.currentTarget.elements.password.value;
  if (!emailValue.length || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }
  console.log({
    email: emailValue.trim(),
    password: passwordValue.trim(),
  });
  form.reset();
}
