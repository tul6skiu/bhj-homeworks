const tooltip = document.querySelector('.tooltip');
const elements = Array.from(document.getElementsByClassName('has-tooltip'));

elements.forEach((el) => {
    el.addEventListener('click', (event) => {
        event.preventDefault(); 

        const title = el.getAttribute('title');
        if (tooltip.textContent === title) {
            tooltip.classList.remove('tooltip_active');
        }else {
            tooltip.textContent = title;
            tooltip.classList.add('tooltip_active');
        }
    

        const rect = el.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;
    });
});