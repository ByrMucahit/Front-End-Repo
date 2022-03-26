const offsetX = document.querySelector('#offsetx');
const offsetY = document.querySelector('#offsety');
const blur = document.querySelector('#blur');
const color = document.querySelector('#color');
const resultElement = document.querySelector('#result');
const box = document.querySelector('.my-element');

const render = () => {
    const result = `text-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${color.value}`;

    resultElement.innerHTML = `<code>${result}</code>`;
    box.setAttribute('style', result);
};

[offsetX, offsetY, blur, color].forEach(input => input.addEventListener('input', render));

render();
