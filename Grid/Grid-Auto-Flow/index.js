let switcher = document.getElementById("switcher");
let switcher2 = document.getElementById('switcher2');
let root = document.documentElement;

switcher.addEventListener("change", function (evt){
    root.style.setProperty('--var-flow', evt.target.value);
})

switcher2.addEventListener("change", function (evt){
    root.style.setProperty('--var-mode', evt.target.value)
});