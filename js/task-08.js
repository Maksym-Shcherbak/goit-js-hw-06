const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть усі поля");
  }

  console.log(
    `${email.name}: ${email.value}, ${password.name}: ${password.value}`
  );
  event.currentTarget.reset();
}
