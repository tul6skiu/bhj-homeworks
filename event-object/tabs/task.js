const tabs = Array.from(document.getElementsByClassName('tab'));
const tabContent = Array.from(document.getElementsByClassName('tab__content'));

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab.tab_active')?.classList.remove('tab_active');
        tab.classList.add('tab_active');
        snowContent(index);
    });
});

function snowContent(index) {
    const tt = tabContent[index];
    document.querySelector('.tab__content.tab__content_active')?.classList.remove('tab__content_active');
    tt.classList.add('tab__content_active'); 
}



