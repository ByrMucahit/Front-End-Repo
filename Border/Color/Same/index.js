const toggle = document.querySelector('#toggle-element');
const element = document.querySelector('.my-element');

toggle.addEventListener('change', ({target}) => {
    element.setAttribute('style', target.checked ? 'border: solid goldenrod;': '');
});