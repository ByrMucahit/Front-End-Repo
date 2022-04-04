const parentBox = document.querySelector('[data-element="parent-box"]')
const heightLabel = document.querySelector('[data-element="height-label"]')
const widthLabel = document.querySelector('[data-element="width-label"]')
const intrinsicSwitch = document.querySelector("#intrinsic-switch");

const observer = new ResizeObserver((observedItems) => {
    const {borderBoxSize} = observedItems[0];

    widthLabel.innerText = `${Math.round(borderBoxSize[0].inlineSize)}px`;
    heightLabel.innerText = `${Math.round(borderBoxSize[0].blockSize)}px`;
});

observer.observe(parentBox);

intrinsicSwitch.addEventListener("change", () => {
    console.log("It's here");
    console.log("parent box", parentBox);
    parentBox.setAttribute(
        "data-sizing",
        intrinsicSwitch.checked ? "intrinsic":"extrinsic"
    );
});