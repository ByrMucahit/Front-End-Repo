let root = document.documentElement;
let textOverflow= document.getElementById("switcher");
textOverflow.addEventListener("change", function (evt) {
    root.style.setProperty('--var-text-overflow', evt.target.value);
});

let textDirection= document.getElementById("direction");
textDirection.addEventListener("change", function (evt) {
    root.style.setProperty('--var-text-direction', evt.target.value);
});
