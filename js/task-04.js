let counterValue = 0;
const refs = {
  increaseBtn: document.querySelector('[data-action="increment"]'),
  decreaseBtn: document.querySelector('[data-action="decrement"]'),
  valueOutput: document.querySelector("#value"),
};
refs.increaseBtn.addEventListener("click", onIncrement);
refs.decreaseBtn.addEventListener("click", onDecrement);
function onIncrement() {
  counterValue += 1;
  return (refs.valueOutput.textContent = counterValue);
}
function onDecrement() {
  counterValue -= 1;
  return (refs.valueOutput.textContent = counterValue);
}
