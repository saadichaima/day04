document.addEventListener('DOMContentLoaded', function() {
    const par = document.createElement('p');
    par.textContent = 'Now featuring a headphone jack!';
    document.querySelector('#description').appendChild(par); 
});
