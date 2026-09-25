// localStorage.js
// let name = localStorage.setItem('name')
// //set маалыматты сактайт

// let input = document.getElementById("input")
// let btn = document.getElementById("btn")
// let result = document.getElementById("result")

// btn.addEventListener("click", () =>{
//     localStorage.setItem('text',input.value)
    
//     result.innerHTML = localStorage.getItem('text')
// })

// const saved = localStorage.getItem("text");
// if (saved) result.textContent = "мурда сакталган:" + saved;

// let name = prompt("Атың ким?");
// localStorage.setItem("name", name);
// let savedName = localStorage.getItem("name");

// console.log(savedName);



// document.cookie = "username=Kuba; max-age=3600";
// console.log(document.cookie);
 // Cookie сактоо
        function saveCookie() {
            let name = document.getElementById("name").value;

            document.cookie = "username=" + name + "; max-age=3600";

            document.getElementById("result").textContent =
                "Атың Cookie'ге сакталды!";
        }

        function showCookie() {
            document.getElementById("result").textContent =
                "Cookie: " + document.cookie;
        }