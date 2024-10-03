document.addEventListener('DOMContentLoaded', function() {
    const productName = document.getElementById('productName');
    productName.textContent = 'Samsung Galaxy S22'; 

    const priceElement = document.getElementById('price');
    priceElement.textContent = '890 €'; 

    const productImage = document.querySelector('img');
    productImage.src = 'Samsung22.png'; 

    fetch('Samsung.txt') 
        .then(response => response.text())
        .then(data => {
            const descriptionElement = document.getElementById('description');
            descriptionElement.innerHTML = data; 
        });
    let cartCount = 0;
    const cartButton = document.querySelector('.cart-btn');
    const cartDisplay = document.createElement('span'); 

    cartDisplay.textContent = ` In cart: ${cartCount}`;
    document.querySelector('.content').appendChild(cartDisplay); 

    cartButton.addEventListener('click', function() {
        cartCount++;
        cartDisplay.textContent = ` In cart: ${cartCount}`;
    });

});
