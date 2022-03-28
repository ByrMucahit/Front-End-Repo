const toggle = document.querySelector('#toggle-element');

const img = document.querySelector('img');

toggle.addEventListener('change', ({target})=> {
    img.style.mixBlendMode = target.checked ? 'multiply' : 'normal';
});