const inputValue = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";

createBtn.addEventListener("click", onCreateBoxes);
destroyBtn.addEventListener("click", onDestroyBoxes);

function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeight = 30;
  let boxesArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxWidth}px`;
    boxWidth += 10;
    box.style.height = `${boxHeight}px`;
    boxHeight += 10;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
  }
  return boxesArray;
}

function onCreateBoxes() {
  const createdBoxes = createBoxes(inputValue.value);
  boxes.append(...createdBoxes);
}

function onDestroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
