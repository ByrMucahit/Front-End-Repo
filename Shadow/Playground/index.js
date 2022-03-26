const offsetX = document.querySelector('#offsetx');
const offsetY = document.querySelector('#offsety');
const blur = document.querySelector('#blur');
const spread = document.querySelector('#spread');
const color = document.querySelector('#color');
const inset = document.querySelector('#inset');
const resultElement = document.querySelector('#result');
const box = document.querySelector('.my-element');

const render = () => {
    const result = `box-shadow: ${inset.checked ? 'inset ' : ''}${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value}`;

    resultElement.innerHTML = `<code>${result}</code>`;
    box.setAttribute('style', result);
};

[offsetX, offsetY, blur, spread, color].forEach(input =>
    input.addEventListener('input', render)
);

inset.addEventListener('change', render)

render();
