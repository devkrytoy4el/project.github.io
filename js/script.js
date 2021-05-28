//MENU
const menuButton = document.querySelector('.header__mobile');
const buttonLines = document.querySelectorAll('.header__mobile-line');
const menu = document.querySelector('.header');
const mainContent = document.querySelector('.main__content')
const nav = document.querySelector('.nav');
const list = document.querySelector('.menu__mobile-list');
const wrapper = document.querySelector('.wrapper');

//UP BUTTON
const upButton = document.querySelector('.up');

//PORTFOLIO MENU
const portfolioMenu = document.querySelector('.portfolio__list-title');

//PORTFOLIO MENU LOGIC
portfolioMenu.addEventListener('click', function(event) {
    document.querySelector('.portfolio__list-content').classList.toggle('active')
})

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
    buttonLines.forEach(function(el, i) {
        buttonLines[i].classList.toggle('active')
    })

})

list.addEventListener('click', function(event) {
    let target = event.target;
    if (target.className = 'menu__mobile-item') {
        document.body.classList.toggle('hidden');
        menuMobile.classList.toggle('active');
        buttonLines.forEach(function(el, i) {
            buttonLines[i].classList.toggle('active')
        })
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

const menuLinks = document.querySelectorAll('.portfolio__list-item');
const item = document.querySelectorAll('.portfolio__right-content-img')


for (let i = 0; i <= menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function() {
        for (el of item) {
            el.classList.remove('active')
        }

        if (i == 0) {
            item.forEach(function(el, i) {
                item[i].classList.add('active')
            })
        } else {
            item[i - 1].classList.toggle('active')
        }

        for (elem of menuLinks) {
            elem.classList.remove('active')
        }
        menuLinks[i].classList.toggle('active')
    })
}
