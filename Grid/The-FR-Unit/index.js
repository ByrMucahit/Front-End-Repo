const switcher = document.getElementById("switcher");
const root = document.documentElement;

switcher.addEventListener("change", function (evt) {
    root.style.setProperty("--var-col", evt.target.value)
});