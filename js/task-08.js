const form = document.querySelector(".login-form");
const userData = {};

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть усі поля");
  }
  const emailName = email.name;
  const passwordName = password.name;
  userData[emailName] = email.value;
  userData[passwordName] = password.value;
  event.currentTarget.reset();
  console.log(userData);
}
