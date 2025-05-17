const tooltip = document.querySelector('.tooltip');
const elements = Array.from(document.getElementsByClassName('has-tooltip'));

elements.forEach((el) => {
    el.addEventListener('click', (event) => {
        console.log("z nen")
        console.log(el.getAttribute('title'))
        event.preventDefault();

        const title = el.getAttribute('title');
        tooltip.textContent = title;
        tooltip.classList.add('tooltip_active');

        const rect = el.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;
    });
});