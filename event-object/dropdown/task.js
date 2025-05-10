const dropdownValue = document.querySelector('.dropdown__value');
const dropList = document.querySelector('.dropdown__list');
const dropItemArray = Array.from(document.getElementsByClassName('dropdown__item'));


dropdownValue.addEventListener('click', () => {
    dropList.classList.toggle('dropdown__list_active');
});

dropItemArray.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); 
        dropdownValue.textContent = item.textContent;
        dropList.classList.remove('dropdown__list_active');
    });
});
