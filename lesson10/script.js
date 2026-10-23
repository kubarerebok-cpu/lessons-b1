let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let count = document.getElementById("count");
let reset = document.getElementById("reset");
let mul = document.getElementById("mul");


value = 0 

plus.onclick = function() {
    value++;
    count.innerHTML = value;
}

minus.onclick = function() {
    if (value > 0) 
    value --;
    count.innerHTML = value;
}
reset.onclick = function() {
    value = 0
    count.innerHTML = value;
}
mul.onclick = function() {
    let promptValue = prompt("Введите число для умножения:");
    if (promptValue !== null) {
        let number = parseFloat(promptValue);
        if (!isNaN(number)) {
            value *= number;
            count.innerHTML = value;
        } else {
            alert("Пожалуйста, введите корректное число.");
        }
    }
}
