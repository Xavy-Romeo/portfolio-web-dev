const bodyEl = document.getElementById('body');
const loaderEl = document.getElementById('loader');
const mainEl = document.getElementById('main');

setTimeout(() => {
    loaderEl.style.display = 'none';
    bodyEl.style.overflowY = 'initial';
}, 5000);