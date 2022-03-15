const switcher = document.getElementById("switcher");

const  container = document.querySelector(".container");

const toggle = document.getElementById('toggle-element');

switcher.addEventListener("change", (evt) => {
    container.style.alignItems = evt.target.value;
});

toggle.addEventListener("change", (evt) => {
    container.style.flexDirection = toggle.checked ? 'column':'row';
});