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
            alert("Вы выйграли!");
            deadCount.textContent = parseInt(0)
            lostCount.textContent = parseInt(0);
        } else if (parseInt(lostCount.textContent) === 5) {
            alert("Вы проиграли!");
            deadCount.textContent = parseInt(0);
            lostCount.textContent = parseInt(0);
        }
    
    })
});