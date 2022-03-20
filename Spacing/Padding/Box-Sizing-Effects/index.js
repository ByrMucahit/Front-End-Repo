const myElement = document.querySelector('.my-element');
const  sizeSwitch = document.querySelector('#size-switcher');

sizeSwitch.addEventListener('change', ()=> {
    myElement.setAttribute('data-size',
        sizeSwitch.checked ? 'content-box' : 'border-box');
});