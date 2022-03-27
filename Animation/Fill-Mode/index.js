const grower = document.querySelector('.grower');
const select = document.querySelector('select');

select.addEventListener("change", ({target}) => {
    grower.style.animationFillMode = target.value ;

    grower.classList.remove('animated');

    void grower.offsetWidth;

    grower.classList.add('animated');
});