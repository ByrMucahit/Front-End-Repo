const root = document.documentElement;
const flexWrap = document.getElementById("flexWrap");

flexWrap.addEventListener("click", ()=> {
    root.style.setProperty("--var-flex-wrap", flexWrap.checked ? "wrap":"nowrap");
});