const intervalId = setInterval(function() {
    const curretnTimer = document.getElementById("timer");
    if(parseInt(curretnTimer.textContent) === 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе");
    }else {
        curretnTimer.textContent = curretnTimer.textContent - 1;
    }
}, 1000);