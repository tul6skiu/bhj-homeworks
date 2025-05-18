const products = Array.from(document.querySelectorAll('.product'));
const productAdd  = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');

products.forEach(el => {
    const currentValue = el.querySelector('.product__quantity-value');
    el.addEventListener('click', function(event) {
        event.preventDefault();

        let currentOperationIsPlus = event.target.classList.contains('product__quantity-control_inc');
        let operationMinus = event.target.classList.contains('product__quantity-control_dec');
     
        if (operationMinus && parseInt(currentValue.textContent) === 1) {
            currentValue.textContent = 1;
        }
         if (currentOperationIsPlus) {
            currentValue.textContent = parseInt(currentValue.textContent) + 1;
        }
        if (operationMinus){
            currentValue.textContent = parseInt(currentValue.textContent) - 1;
        }
    });
})

productAdd.forEach(el => {
    el.addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.classList.contains('product__add')) {
            const product = el.closest('.product');

            const count = product.querySelector('.product__quantity-value').textContent;
            const image = product.querySelector('.product__image');
            const dataId = parseInt(product.dataset.id);

            if (isContains(dataId)) {
                increaseIfAvailable(dataId, count, product);
            }else {
                const productCart = createCartProduct(dataId, image.src,count);
                cart.appendChild(productCart);     
            }
        }
    });
});

function increaseIfAvailable(productId, newCount, product) {
    Array.from(document.querySelectorAll('.cart__product')).forEach(el => {
        const dataId = parseInt(el.dataset.id);
        if (dataId == productId) {
            const count = product.querySelector('.product__quantity-value');
            const cartCount = el.querySelector('.cart__product-count')
            cartCount.textContent = newCount;
        }
    });
}

cart.addEventListener('click', function(event) {
    if (event.target.classList.contains('product__remove')) {
        event.preventDefault();
        const cartProduct = event.target.closest('.cart__product');
        if (cartProduct) {
            cartProduct.remove();
        }
    }
});

function isContains(productId) {
 return document.querySelector(`.cart__product[data-id="${productId}"]`) != null;

}
function createCartProduct(productId, imageSrc, count) {
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.dataset.id = productId;

 
    const img = document.createElement('img');
    img.classList.add('cart__product-image');
    img.src = imageSrc;


    const countDiv = document.createElement('div');
    countDiv.classList.add('cart__product-count');
    countDiv.textContent = count;

    const removeBlock = document.createElement('div');

    const removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.classList.add('product__remove');
    removeLink.innerHTML = '&times;';
    removeBlock.appendChild(removeLink);

    cartProduct.appendChild(img);
    cartProduct.appendChild(countDiv);
    cartProduct.appendChild(removeBlock);

    return cartProduct;
}
