//MENU
const menuButton = document.querySelector('.header__mobile');
const menu = document.querySelector('.header');
const mainContent = document.querySelector('.main__content')
const nav = document.querySelector('.nav');
const list = document.querySelector('.menu__mobile-list');
const wrapper = document.querySelector('.wrapper');

//UP BUTTON
const upButton = document.querySelector('.up')


//MENU LOGIC
const menuMobile = document.querySelector('.menu__mobile');

// menuButton.addEventListener('click', function(event) {
//     menu.classList.toggle('active');
//     mainContent.classList.toggle('none');
//     nav.classList.toggle('active');
//     list.classList.toggle('active');
//     menuButton.classList.toggle('active');
//     document.body.classList.toggle('hidden')
// })
menuButton.addEventListener('click', function(event) {
    menuMobile.classList.toggle('active')
    document.body.classList.toggle('hidden');
})

list.addEventListener('click', function(event) {
    let target = event.target;
    if (target.className = 'menu__mobile-item') {
        document.body.classList.toggle('hidden');  
        menuMobile.classList.toggle('active')  

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
