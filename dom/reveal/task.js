const revealElements = document.querySelectorAll('.reveal');


window.addEventListener('scroll', () => {
    revealElements.forEach(reveal => {
        if (isVisable(reveal)) {
            reveal.classList.add('reveal_active');
        }
    });
    
});

function isVisable(element) {
    const {top, bottom} = element.getBoundingClientRect();
    if (bottom < 0) {
        return false
    }
    if (top > window.innerHeight) {
        return false
    }
    return true;
}
