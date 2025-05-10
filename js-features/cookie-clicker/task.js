const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = counter.textContent;
let isEnlarged = false;

cookie.addEventListener('click', () => {
    clickCount++;
    counter.textContent = clickCount;
    
   
   if (isEnlarged) {
        cookie.style.width = '200px'; 
        cookie.style.height = '200px'; 
    } else {
        cookie.style.width = '240px';
        cookie.style.height = '240px'; 
    }
    isEnlarged = !isEnlarged;

});

