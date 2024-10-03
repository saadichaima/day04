document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.querySelector('.cart-btn');
    changeColorButton.textContent = 'CHANGE COLOR';

    const colors = ['#FF5733','#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E67E22', '#2ECC71', '#3498DB', '#E74C3C', '#F39C12' ];

    changeColorButton.addEventListener('click', function() {

        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        document.body.style.backgroundColor = randomColor;
    });
});
