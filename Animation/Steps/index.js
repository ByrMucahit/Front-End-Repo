const toggle = document.querySelector('#toggle-element');
const demo = document.querySelector('.demo');

toggle.addEventListener('change', ({target}) => {
    demo.style.animationTimingFunction = target.checked ? 'steps(10, end)' : 'linear';
});