let root = document.documentElement;
let overflow= document.getElementById("switcher");
overflow.addEventListener("change", function (evt) {
    root.style.setProperty('--var-overflow', evt.target.value);
});

root.style.setProperty('--var-overflow', 'scroll');
