const boxes = document.querySelectorAll('[data-transform]');

const slider = document.querySelector('input[type="range"]');

slider.addEventListener('input', () => {
    boxes.forEach(box => {
        box.setAttribute(
            'style', `transform: rotate${box.getAttribute('data-transform')
                .toUpperCase()}(${slider.value}deg`)
    })
})