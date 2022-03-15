const switcher = document.getElementById("switcher");
const box = document.querySelector(".box");
const container = document.querySelector(".container");
const toggle = document.getElementById('toggle-element');

switcher.addEventListener("change", (evt) => {
    box.style.alignSelf = evt.target.value ;

});

toggle.addEventListener("change", (evt) => {
    container.style.flexDirection = toggle.checked ? 'column': 'row';
});