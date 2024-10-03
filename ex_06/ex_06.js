document.addEventListener('DOMContentLoaded', function() {
    const phoneImage = document.querySelector('img');
    window.addEventListener('resize', function() {
        alert('Size matters');
    });
    phoneImage.addEventListener('mouseover', function() {
        alert("Pretty, isn't it?");
    });
});
