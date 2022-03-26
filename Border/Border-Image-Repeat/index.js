const options = document.querySelector('select');

const element = document.querySelector('.my-element');

options.addEventListener('change', ()=> {
    element.style.borderImageRepeat = options.value;
});