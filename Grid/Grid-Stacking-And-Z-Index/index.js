let root = document.documentElement;

let zIndex = document.getElementById("z-index");
zIndex.addEventListener("click", function (evt) {
    if(zIndex.checked) {
        root.style.setProperty('--var-z-index', 2);
    } else {
        root.style.setProperty('--var-z-index', 0);
    }
});

