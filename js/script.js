const menuButton = document.querySelector('.header__mobile');
const menu = document.querySelector('.header');
const mainContent = document.querySelector('.main__content')
const nav = document.querySelector('.nav');
const list = document.querySelector('.nav__list');


menuButton.addEventListener('click', function(event) {
    menu.classList.toggle('active');
    mainContent.classList.toggle('none');
    nav.classList.toggle('active2');
    list.classList.toggle('active3');
    menuButton.classList.toggle('margin');
    let target = event.target;
    console.log(target)
})


list.addEventListener('click', function(event) {
    let target = event.target;
    console.log(target)
    if (target.className = 'nav__item') {
        menu.classList.remove('active');
        mainContent.classList.remove('none');
        nav.classList.remove('active2');
        list.classList.remove('active3');
        menuButton.classList.remove('margin');
    }
})