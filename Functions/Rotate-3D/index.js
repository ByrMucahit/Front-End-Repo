const box = document.querySelector('.demo');
const slider = document.querySelector('input[type="range"]');

slider.addEventListener('input', ()=> {
    box.setAttribute('style', `transform: rotate3d(1, 1, 1, ${slider.value}deg`);
});