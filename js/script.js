//MENU
const menuButton = document.querySelector('.header__mobile');
const menu = document.querySelector('.header');
const mainContent = document.querySelector('.main__content')
const nav = document.querySelector('.nav');
const list = document.querySelector('.nav__list');
const wrapper = document.querySelector('.wrapper');

//UP BUTTON
const upButton = document.querySelector('.up')


//MENU LOGIC
menuButton.addEventListener('click', function(event) {
    menu.classList.toggle('active');
    mainContent.classList.toggle('none');
    nav.classList.toggle('active2');
    list.classList.toggle('active3');
    menuButton.classList.toggle('margin');
    for (let i = 0; i < document.querySelector('.wrapper').childNodes.length; i++) {
        if (wrapper.childNodes[i].classList != 'main') {
            //wrapper.childNodes[i].classList.toggle('.none');
            wrapper.childNodes[i].classList.toggle('.none');
            console.log(wrapper);

        }
    }
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

//UP BUTTON LOGIC
function mouseCoords(e) {
    x = e.pageX; // Координата X курсора
    y = e.pageY; // Координата Y курсора
    if (y >= window.screen.height) {
        upButton.classList.remove('none')
    } else {
        upButton.classList.add('none')
    }
}