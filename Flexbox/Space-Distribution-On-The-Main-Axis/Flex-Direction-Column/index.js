const swithcer = document.getElementById("switcher");
const container = document.querySelector(".container");

swithcer.addEventListener("change", (evt)=> {
    container.style.justifyContent = evt.target.value;
})