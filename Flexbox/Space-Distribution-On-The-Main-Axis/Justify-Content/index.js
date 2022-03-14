const switcher = document.getElementById("switcher");
const container = document.querySelector(".container");

switcher.addEventListener("change", (evt) => {
    container.style.justifyContent = evt.target.value;
})