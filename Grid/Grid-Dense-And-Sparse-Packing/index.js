let root = document.documentElement;

let packing = document.getElementById("gridPacking");
packing.addEventListener("click", function (evt) {
    if(packing.checked) {
        root.style.setProperty('--var-packing', 'row dense');
    } else {
        root.style.setProperty('--var-packing', 'row');
    }
});