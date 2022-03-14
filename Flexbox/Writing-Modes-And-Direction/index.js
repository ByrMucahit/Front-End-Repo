const swicther = document.getElementById("switcher");
const container = document.getElementById("container");

swicther.addEventListener("change", (evt) => {
    container.style.flexDirection = evt.target.value;
});