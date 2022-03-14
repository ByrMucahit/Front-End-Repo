const select = document.querySelector('select');
const box = document.querySelector('.box');

select.addEventListener('change', () => {
    box.style.position = select.value;
});
