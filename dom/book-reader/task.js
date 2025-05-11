const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

fontSizes.forEach(fontSize => {
    fontSize.addEventListener('click', (event) => {
        fontSizes.forEach(el => {
            event.preventDefault(); 
                el.classList.remove('font-size_active');
        
        });
        fontSize.classList.add('font-size_active');

        if (fontSize.classList.contains('font-size_small')) {
            cleanBook()
            book.classList.add('book_fs-small');
        }else if (fontSize.classList.contains('font-size_big')) {
            cleanBook()
            document.getElementById('book').classList.add('book_fs-big');
        }else {
            cleanBook()
        }
    });
})

function cleanBook() {
    book.classList.remove('book_fs-big');
    book.classList.remove('book_fs-small');
}
