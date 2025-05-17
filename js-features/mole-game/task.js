const holes = document.getElementsByClassName('hole');
const deadCount = document.getElementById('dead');
const lostCount = document.getElementById('lost');

const holesArray = Array.from(holes);

holesArray.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount.textContent = parseInt(deadCount.textContent) + 1;
        }else {
            lostCount.textContent = parseInt(lostCount.textContent)+ 1;
        }
          
        if (parseInt(deadCount.textContent) === 10) {
            reStart("Вы выйграли!")
        } else if (parseInt(lostCount.textContent) === 5) {
            reStart("Вы проиграли!")
        }
    
    })
});

function reStart(finishTextWhenGameEnd) {
    alert(finishTextWhenGameEnd);
    deadCount.textContent = parseInt(0)
    lostCount.textContent = parseInt(0);
}