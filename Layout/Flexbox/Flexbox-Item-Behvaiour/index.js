const switches = document.querySelectorAll('[role="switch"]');
const demo = document.querySelector(".my-element");

switches.forEach((item) => {
    item.addEventListener("change", () => {
        if (item.checked) {
            demo.setAttribute(`data-${item.getAttribute("id")}`, "");
        } else {
            demo.removeAttribute(`data-${item.getAttribute("id")}`);
        }
    });
});
