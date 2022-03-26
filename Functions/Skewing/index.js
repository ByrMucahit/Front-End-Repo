const box = document.querySelector('.demo');
const  sliders = [...document.querySelectorAll('input[type="range"]')];

const update = () => {
    let transform = sliders.map(slider => {
        return `skew(${slider.value}deg`;
    }).join(' ');

    box.setAttribute('style', `transform:${transform}`);
};

sliders.forEach(slider => {
    slider.addEventListener('input', ()=> {
        update();
    })
});