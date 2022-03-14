const switcher = document.getElementById("switcher");
const  items = document.querySelectorAll(".box");

switcher.addEventListener("change", (evt) => {
    items.forEach((item) => {
        item.style.flex = evt.target.value;
    });
});