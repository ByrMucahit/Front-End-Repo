const switcher = document.getElementById("switcher");
const container = document.getElementById("container");

switcher.addEventListener("change", (evt) => {
    container.style.flexDirection = evt.target.value;
})