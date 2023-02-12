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
    const copyBtns = qsa(".epic_copy-btns");

    menuBtn.addEventListener("click", dropmenu);
    closeMenuBtn.addEventListener("click", dropmenu);

    copyBtns.forEach( (btns) => {
        btns.addEventListener('click', (e) => {
            alert('copied');
            navigator.clipboard.writeText(e.target.title);
        });
    });

    function dropmenu(e) {
        qs('.epic_nav').classList.toggle('active')
        qs('.epic_nav').classList.toggle('up-in')
    }
})

let links = [

    ['https://epic-styles.github.io/epic.css'],
    ['https://epic-styles.github.io/colour.css'],
    ['https://epic-styles.github.io/sizes.css'],
    ['https://epic-styles.github.io/style.css'],
    ['https://epic-styles.github.io/classes.css'],
    ['https://epic-styles.github.io/lg_classes.css'],
    ['https://epic-styles.github.io/md_classes.css'],

    ['https://epic-styles.github.io/font.css'],
    ['https://epic-styles.github.io/icon.css'], 
    ['https://epic-styles.github.io/anim.css']

]

for (let i = 0; i < links.length; i++) {
    let linked = document.createElement('link');
    linked.setAttribute('type','text/css');
    linked.setAttribute('rel','stylesheet');
    linked.setAttribute('href',links[i]);
    
    document.querySelector('head').append(linked);    
}

