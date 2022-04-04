let root = document.documentElement;
let overscroll = document.getElementById("switcher");

overscroll.addEventListener("change", function (evt){
    root.style.setProperty('--var-overscroll-behaviour', evt.target.value);
});

root.style.setProperty('--var-overscroll-behaviour', 'contain');

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function (){
    modal.style.display ="block";
}
span.onclick = function (){
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}