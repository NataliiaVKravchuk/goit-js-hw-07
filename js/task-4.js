const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value.trim();
  const passwordValue = event.currentTarget.elements.password.value.trim();
  if (!emailValue.length || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }
  console.log({
    email: emailValue,
    password: passwordValue,
  });
  form.reset();
}
