let input = document.getElementById("input");
let today = document.getElementById("today");
let after = document.getElementById("after");
let todaylist = document.getElementById("todaylist");
let futurelist = document.getElementById("futurelist");


function addTask(list) { 
    let inputText = input.value.trim()
    let textItem = document.createElement("li")
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push(inputText)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    input.value = ""

    textItem.querySelector(".remove").addEventListener("click", function() {
        list.removeChild(textItem)
    })
}


today.addEventListener("click", function() {
    addTask(todaylist)
})


after.addEventListener("click", function() {
    addTask(futurelist)
})