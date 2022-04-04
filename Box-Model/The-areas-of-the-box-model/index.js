document.body.setAttribute('dir', 'ltr');

window.show_scrollbars.addEventListener('input', e => window.box_model.setAttribute('scrollbars', e.target.checked))

window.inline_scrollbars.addEventListener('input', e => window.box_model.setAttribute('inline-scrollbars', e.target.checked))