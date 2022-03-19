let root = document.documentElement;
let switcher1 = document.getElementById("switcher");
switcher1.addEventListener("change", function (evt) {
    root.style.setProperty('--var-align-content', evt.target.value);
});

let switcher2 = document.getElementById("switcher2");
switcher2.addEventListener("change", function (evt){
    root.style.setProperty('--var-justify-content', evt.target.value);
})