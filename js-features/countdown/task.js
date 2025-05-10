
const minusF = function() {
    const curretnTimer = document.getElementById("timer");
    if(curretnTimer.textContent === 0) {
        alert("Вы победили в конкурсе");
    }else {
        curretnTimer.textContent = curretnTimer.textContent - 1;
    }
}
setInterval(minusF, 1000);