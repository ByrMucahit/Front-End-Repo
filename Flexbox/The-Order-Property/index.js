const switcher = document.getElementById("switcher");
const box = document.querySelector(".box");

switcher.addEventListener("change", (evt) => {
    box.style.order = evt.target.value;
})