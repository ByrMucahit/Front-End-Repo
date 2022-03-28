const  toggle = document.querySelector('#toggle-element');

const isolate = document.querySelector('.isolate');

toggle.addEventListener('change', ({target}) => {

    isolate.style.isolation = target.checked ? 'isolate': 'auto';
})