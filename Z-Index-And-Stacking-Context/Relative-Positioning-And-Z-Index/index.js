const toggle = document.querySelector('#toggle-element');
const boxes = document.querySelectorAll('.demo-box');

toggle.addEventListener('change', ({target}) => {
    boxes.forEach(box =>
        box.setAttribute('data-state', target.checked ? 'relative' : 'static')
    );
});
