let nav_list = document.querySelector('.nav_list')
let SectionBurger = document.querySelector('.section_burger')
let burgerMenu = document.querySelectorAll('.burger_menu')
let headerBlock = document.querySelector('.header_block')
let logo = document.querySelector('.nav_logo')
let burger_bg = document.querySelector('.burger_bg')
let container = document.querySelector('.container')
let bgPrometheus = document.querySelector('.background')
let prometheus = document.querySelector('.Prometheus')

SectionBurger.addEventListener('click' ,() => {
    burgerMenu.forEach(items => {
        items.classList.toggle('active')
    })
    logo.classList.toggle('hidden')
    headerBlock.classList.toggle('hidden')
    container.classList.toggle('h-100vh')
    burgerMenu[0].classList.contains('active')?nav_list.style.display = 'block':nav_list.style.display = 'none'
    burger_bg.style.display == 'block' ? burger_bg.style.display = 'none' :burger_bg.style.display = 'block'
    
})


// document.addEventListener('mousemove', (e) => {
//     let x = e.clientX / innerWidth;
//     let y = e.clientY / innerHeight;

//     bgPrometheus.style.transform = `translate(${(-x * 10)}px, ${(-y * 10)}px)`;
//     prometheus.style.transform = `translate(${(-x * 20)}px, ${(-y * 20)}px)`;
// });
