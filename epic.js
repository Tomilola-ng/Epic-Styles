let qs = (e) => document.querySelector(e);
let qsa = (e) => document.querySelectorAll(e);

document.addEventListener('DOMContentLoaded', () => {
    let h_calcs = document.querySelectorAll('.h-calc');

    h_calcs.forEach(e => {
        if (e.clientWidth > 768) {
            let tall = e.offsetHeight
            e.style.height = tall + 'px' 
        }
    });

    const menuBtn = qs(".epic_menu-btn");
    const closeMenuBtn = qs(".epic_close-nav");

    menuBtn.addEventListener("click", dropmenu);
    closeMenuBtn.addEventListener("click", dropmenu);

    function dropmenu(e) {
        qs('.epic_nav').classList.toggle('active')
        qs('.epic_nav').classList.toggle('up-in')
    }
})

let links = [

    ['https://tee-o28.github.io/epic.css'],
    ['https://tee-o28.github.io/colour.css'],
    ['https://tee-o28.github.io/sizes.css'],
    ['https://tee-o28.github.io/style.css'],
    ['https://tee-o28.github.io/classes.css'],
    ['https://tee-o28.github.io/lg_classes.css'],
    ['https://tee-o28.github.io/md_classes.css'],

    ['https://tee-o28.github.io/font.css'],
    ['https://tee-o28.github.io/icon.css'], 
    ['https://tee-o28.github.io/anim.css']

]

for (let i = 0; i < links.length; i++) {
    let linked = document.createElement('link');
    linked.setAttribute('type','text/css');
    linked.setAttribute('rel','stylesheet');
    linked.setAttribute('href',links[i]);
    
    document.querySelector('head').append(linked);    
}

