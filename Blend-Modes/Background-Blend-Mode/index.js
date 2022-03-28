const toggle = document.querySelector('#toggle-element');

const demo = document.querySelector('.demo');

toggle.addEventListener('change', ({target}) => {
    demo.style.backgroundBlendMode = target.checked ? 'overlay' : 'normal';
});