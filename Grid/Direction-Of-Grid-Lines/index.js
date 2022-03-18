let root = document.documentElement;
let switcher = document.getElementById("switcher");
let direction = document.getElementById("direction");

switcher.addEventListener("change", function (evt) {
    root.style.setProperty('--var-writing-mode', evt.target.value);
});

direction.addEventListener("click", function (evt) {
    if(direction.checked) {
        root.style.setProperty('--var-direction', 'rtl');
    } else {
        root.style.setProperty('--var-direction', 'ltr');
    }
});