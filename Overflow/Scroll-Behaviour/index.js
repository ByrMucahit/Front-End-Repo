let root = document.documentElement;
const scroll = document.querySelector('#scroll');

const render = () => {
    root.style.setProperty('--var-scroll-behavior', scroll.checked ? "smooth" : "auto");
};

scroll.addEventListener('change', render);

render();