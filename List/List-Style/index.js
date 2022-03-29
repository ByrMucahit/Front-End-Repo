const type = document.querySelector('#type');
const position = document.querySelector('#position');
const image = document.querySelector('#image');
const reset = document.querySelector('#reset');

const resultElement = document.querySelector('#result');
const list = document.querySelector('.my-element');

const render = () => {
    const result = reset.checked ? '--reset: none;' : `--type: ${type.value}; --position: ${position.value}; --image: ${image.value};`

    resultElement.innerHTML = `<code>${result}</code>`;
    list.setAttribute('style', result);
};

[type, position, image].forEach(input =>
    input.addEventListener('input', render)
);
reset.addEventListener('change', render)

render();