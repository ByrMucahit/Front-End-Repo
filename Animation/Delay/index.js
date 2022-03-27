const grower = document.querySelector(".grower");
const select = document.querySelector("select");

select.addEventListener("change", ({target})=> {
    grower.style.animationDelay = target.value;

    grower.classList.remove('animated');

    void grower.offsetWidth;

    grower.classList.add('animated');
});