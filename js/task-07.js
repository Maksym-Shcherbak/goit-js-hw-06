const controlInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

controlInput.addEventListener("input", (event) => {
  textOutput.style.fontSize = `${event.currentTarget.value}px`;
});
