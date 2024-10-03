document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach((para, index) => {
        para.textContent = (index + 1).toString(); 
    });
});