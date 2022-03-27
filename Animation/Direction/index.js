const grower = document.querySelector(".grower");
const  select = document.querySelector("select");

select.addEventListener("change", ( {target}) => {
    grower.style.animationDirection = target.value;
});