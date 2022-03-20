const slider = document.querySelector('[type="range"]');
const demo = document.querySelector('.demo');


slider.addEventListener('input', ({target}) =>
    demo.style.setProperty('--heading-margin', `${target.value}rem`)
);
