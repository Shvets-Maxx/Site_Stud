// let nav_list = document.querySelector('.nav_list')
// let SectionBurger = document.querySelector('.section_burger')
// let burgerMenu = document.querySelectorAll('.burger_menu')
// let headerBlock = document.querySelector('.header_block')
// let logo = document.querySelector('.nav_logo')
// let burger_bg = document.querySelector('.burger_bg')
// let container = document.querySelector('.container')
// let bgPrometheus = document.querySelector('.background')
// let prometheus = document.querySelector('.Prometheus')
// let section_block = document.querySelector('.section_block')
// let header = document.querySelector('.header')

// SectionBurger.addEventListener('click' ,() => {
//     burgerMenu.forEach(items => {
//         items.classList.toggle('active')
//     })
//     logo.classList.toggle('hidden')
//     // headerBlock.classList.toggle('hidden')
//     // container.classList.toggle('h-100vh')
//     section_block.style.height == 100 +'vh' ? section_block.style.height = 'none' :section_block.style.height =  100 +'vh'
//     section_block.style.width == 100 +'vw' ? section_block.style.width = 'none' :section_block.style.width = 100 +'vw'
//     section_block.style.background == `rgb(${34}, ${34}, ${34})` ? section_block.style.background = 'none' :section_block.style.background =`rgb(${34}, ${34}, ${34})`
//     burger_bg.style.display == 'block' ? burger_bg.style.display = 'none' :burger_bg.style.display = 'block'
//     nav_list.style.display == 'block' ? nav_list.style.display = 'none' :nav_list.style.display = 'block'

//     let paddingHeader = window.getComputedStyle(header).padding;
//     paddingHeader == '20px 20px 0 20px' ? header.style.padding = '0px' : header.style.padding = '20px 20px 0 20px'

//     let paddingSectionBlock = window.getComputedStyle(section_block).padding;
//     paddingSectionBlock == '0' ? paddingSectionBlock = '20px 20px 0px' : paddingSectionBlock = '0'

    
// })


// document.addEventListener('mousemove', (e) => {
//     let x = e.clientX / innerWidth;
//     let y = e.clientY / innerHeight;

//     bgPrometheus.style.transform = `translate(${(-x * 10)}px, ${(-y * 10)}px)`;
//     prometheus.style.transform = `translate(${(-x * 20)}px, ${(-y * 20)}px)`;
// });


let nav_list = document.querySelector('.nav_list');
let SectionBurger = document.querySelector('.section_burger');
let burgerMenu = document.querySelectorAll('.burger_menu');
let headerBlock = document.querySelector('.header_block');
let logo = document.querySelector('.nav_logo');
let burger_bg = document.querySelector('.burger_bg');
let container = document.querySelector('.container');
let bgPrometheus = document.querySelector('.background');
let prometheus = document.querySelector('.Prometheus');
let section_block = document.querySelector('.section_block');
let header = document.querySelector('.header');

SectionBurger.addEventListener('click', () => {
    // Перемикання класів для меню
    burgerMenu.forEach(items => {
        items.classList.toggle('active');
    });
    logo.classList.toggle('hidden');

    // Встановлення стилів для section_block
    const sectionStyles = window.getComputedStyle(section_block);
    section_block.style.height = sectionStyles.height === '100vh' ? 'auto' : '100vh';
    section_block.style.width = sectionStyles.width === '100vw' ? 'auto' : '100vw';

    const sectionBgColor = sectionStyles.backgroundColor;
    section_block.style.background = sectionBgColor === 'rgb(34, 34, 34)' ? 'transparent' : 'rgb(34, 34, 34)';

    // Перемикання видимості для burger_bg і nav_list
    burger_bg.style.display = burger_bg.style.display === 'block' ? 'none' : 'block';
    nav_list.style.display = nav_list.style.display === 'block' ? 'none' : 'block';

    // Перемикання padding для header
    // const headerPadding = window.getComputedStyle(header).padding;
    // header.style.padding = headerPadding === '20px 20px 0px 20px' ? '0' : '20px 20px 0 20px';
    const computedPadding = window.getComputedStyle(header).padding;

    // Перемикаємо значення
    if (computedPadding.trim() === '20px 20px 0px') {
        header.style.padding = '0px';
    } else {
        header.style.padding = '20px 20px 0 20px';
    }
    

    // Лог для перевірки змін
    console.log('Current header padding:', header.style.padding);

    // Перемикання padding для section_block
    const sectionPadding = window.getComputedStyle(section_block).padding;
    section_block.style.padding = sectionPadding === '0px' ? '20px' : '0';
});

// Анімація руху фонів
document.addEventListener('mousemove', (e) => {
    let x = e.clientX / innerWidth;
    let y = e.clientY / innerHeight;

    bgPrometheus.style.transform = `translate(${(-x * 10)}px, ${(-y * 10)}px)`;
    prometheus.style.transform = `translate(${(-x * 20)}px, ${(-y * 20)}px)`;
});
