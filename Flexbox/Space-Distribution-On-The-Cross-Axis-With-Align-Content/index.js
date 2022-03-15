const switcer = document.getElementById("switcher");
const  container = document.getElementById('container');

switcer.addEventListener("change", (evt) => {
    container.setAttribute('style', `align-content: ${evt.target.value}`)
})