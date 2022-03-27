const button = document.querySelector('button');
const grower = document.querySelector('.grower');

button.addEventListener('click', () => {
    grower.classList.remove('animate');

    void grower.offsetWidth();

    grower.classList.add('animate');
})