const menuButton = document.querySelector('.header__mobile');
const menu = document.querySelector('.header');
const mainContent = document.querySelector('.main__content')
const nav = document.querySelector('.nav');
const list = document.querySelector('.nav__list');
const items = list.querySelectorAll('.nav__list-item');


menuButton.addEventListener('click', function(event) {
    menu.classList.add('active');
    mainContent.classList.add('none');
    nav.classList.add('active2');
    list.classList.add('active3');
    menuButton.classList.add('margin')
})


list.addEventListener('click', function(event) {
    let target = event.target;
    if (target.className = 'nav__item') {
        menu.classList.remove('active');
        mainContent.classList.remove('none');
        nav.classList.remove('active2');
        list.classList.remove('active3');
        menuButton.classList.remove('margin')
    }
})