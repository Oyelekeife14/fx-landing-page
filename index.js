let count = document.querySelectorAll(".press");
let result = document.querySelectorAll("#finalResult");


function increment() {
    var countElement = document.getElementById("count");
    var count = parseInt(countElement.textContent);
    count++;
    countElement.textContent = count;
}

function decrement() {
    var countElement = document.getElementById("count");
    var count = parseInt(countElement.textContent);
    count--;
    countElement.textContent = count;
}