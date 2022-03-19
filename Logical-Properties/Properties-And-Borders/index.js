const toggle = document.querySelector('#toggle-element');

toggle.addEventListener('change', evt => {
    document.documentElement.style.setProperty(
        '--direction',
        evt.target.checked ? 'rtl': 'ltr'
    );
});