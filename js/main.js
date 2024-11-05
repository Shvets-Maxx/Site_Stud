let nav_list = document.querySelector('.nav_list')
let SectionBurger = document.querySelector('.section_burger')
let burgerMenu = document.querySelectorAll('.burger_menu')
SectionBurger.addEventListener('click' ,() => {
    burgerMenu.forEach(items => {
        items.classList.toggle('active')
    })
    burgerMenu[0].classList.contains('active')?nav_list.style.display = 'block':nav_list.style.display = 'none'
})

