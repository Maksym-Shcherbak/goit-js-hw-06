const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length === Number(validationInput.dataset.length)
  ) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});

validationInput.addEventListener("focus", () => {
  validationInput.classList.remove("invalid");
  validationInput.classList.remove("valid");
});
