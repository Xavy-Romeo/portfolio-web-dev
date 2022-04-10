const menuIconEl = document.getElementById('menu-icon');
const mobileMenuEl = document.getElementById('mobile-menu');
const hambugerIconEl = document.getElementById('hamburger-icon');
const xIconEl = document.getElementById('x-icon');
const navItemEl = document.querySelectorAll('.nav-item')

const toggleMenu = () => {
    menuIconEl.classList.toggle('active');
    mobileMenuEl.classList.toggle('active');

    if (menuIconEl.classList.contains('active')) {
        hambugerIconEl.style.display = 'none';
        xIconEl.style.display = 'block';
    }
    else {
        hambugerIconEl.style.display = 'block';
        xIconEl.style.display = 'none';
    }

    navItemEl.forEach(item => {
        item.addEventListener('click', navClick)
    });
};

const navClick = () => {
    menuIconEl.classList.toggle('active');
    mobileMenuEl.classList.toggle('active');
    
    if (menuIconEl.classList.contains('active')) {
        hambugerIconEl.style.display = 'none';
        xIconEl.style.display = 'block';
    }
    else {
        hambugerIconEl.style.display = 'block';
        xIconEl.style.display = 'none';
    }
};


menuIconEl.addEventListener('click', toggleMenu);