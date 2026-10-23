const numberInput = document.querySelector("#number-input");
const numberCheck = document.querySelector("#number-check");
const redCircle = document.querySelector("#red-circle");
const nameInput = document.querySelector("#name-input");
const nameCheck = document.querySelector("#name-check");
const greeting = document.querySelector("#greeting");

numberCheck.addEventListener("click", () => {
  const number = numberInput.valueAsNumber;
  redCircle.classList.toggle("visible", Number.isFinite(number) && number < 5);
});

nameCheck.addEventListener("click", () => {
  const name = nameInput.value.trim();
  greeting.textContent = name ? `Салам, ${name}!` : "";
});