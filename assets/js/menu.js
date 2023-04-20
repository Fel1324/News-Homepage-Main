const menuLateral = document.querySelector('.menu');
const overlay = document.getElementById('overlay');
const buttonOpenMenu = document.querySelector('.button-open');
const buttonCloseMenu = document.querySelector('.button-close');
const menuLinks = document.querySelectorAll('.menu__link');

buttonOpenMenu.addEventListener('click', openMenu);
buttonCloseMenu.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
})

function openMenu(){
    menuLateral.classList.add('menu-open');
    document.body.style.overflow = 'hidden';

    overlay.style.display = 'block';
}

function closeMenu(){
    menuLateral.classList.remove('menu-open');
    document.body.style.overflow = 'auto';

    overlay.style.display = 'none';
}
