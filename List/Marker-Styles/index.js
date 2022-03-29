const content = document.querySelector('#content');
const padding = document.querySelector('#padding');
const fontSize = document.querySelector('#font-size');
const color = document.querySelector('#color');
const animation = document.querySelector('#animation');
const resultElement = document.querySelector('#result');
const list = document.querySelector('.my-element');

const render = () => {
    const result = `--content: '${content.value}'; --color: ${color.value}; --font-size: ${fontSize.value}; ${animation.checked ? '--animation: 3s infinite alternate color-change' : ''}`

    resultElement.innerHTML = `<code>${result}</code>`;
    list.setAttribute('style', result);
};

[content, color, fontSize].forEach(input =>
    input.addEventListener('input', render)
);
animation.addEventListener('change', render)

render();