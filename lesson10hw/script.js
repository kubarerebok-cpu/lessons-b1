let display = document.getElementById("display");
function add(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
        display.value = eval(display.value);
    }