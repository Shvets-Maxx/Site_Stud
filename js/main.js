let nav_list = document.querySelector('.nav_list')
let SectionBurger = document.querySelector('.section_burger')
let burgerMenu = document.querySelectorAll('.burger_menu')
let headerBlock = document.querySelector('.header_block')
let logo = document.querySelector('.nav_logo')
let burger_bg = document.querySelector('.burger_bg')
let container = document.querySelector('.container')
SectionBurger.addEventListener('click' ,() => {
    burgerMenu.forEach(items => {
        items.classList.toggle('active')
    })
    headerBlock.classList.toggle('hidden')
    logo.classList.toggle('hidden')
    container.classList.toggle('h-100vh')
    burgerMenu[0].classList.contains('active')?nav_list.style.display = 'block':nav_list.style.display = 'none'
    burger_bg.style.display == 'block' ? burger_bg.style.display = 'none' :burger_bg.style.display = 'block'
    
})

