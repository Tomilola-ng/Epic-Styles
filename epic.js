let qs = (e) => document.querySelector(e);
let qsa = (e) => document.querySelectorAll(e);

document.addEventListener('DOMContentLoaded', () => {
    // Const variables
    const h_calcs = document.querySelectorAll('.h-calc');

    const menuBtn = qs(".epic_menu-btn");
    const closeMenuBtn = qs(".epic_close-nav");
    const copyBtns = qsa(".epic_copy-btns");

    const observe_anim = qsa('.observe_anim');

    // Event Listeners
    if (menuBtn != null) {
        menuBtn.addEventListener("click", dropmenu);
        closeMenuBtn.addEventListener("click", dropmenu);
    }

    // For Each Functions
    h_calcs.forEach(e => {
        if (e.clientWidth > 768) {
            let tall = e.offsetHeight;
            e.style.height = tall + 'px' 
        }
    });

    copyBtns.forEach( (btns) => {
        btns.addEventListener('click', (e) => {
            alert('copied');
            navigator.clipboard.writeText(e.target.title);
        });
    });

    // Custom Functions
    function dropmenu(e) {
        qs('.epic_nav').classList.toggle('active')
        qs('.epic_nav').classList.toggle('up-in')
    }


    // Js inbuilt Functions
    observer = new IntersectionObserver(entries => {
        entries.forEach( entry => {
            if (entry.target.classList.contains('observe_once') && entry.isIntersecting) observer.unobserver(entry);
            if (entry.target.classList.contains('anim_left')) entry.target.classList.toggle("left-in", entry.isIntersecting);
            if (entry.target.classList.contains('anim_right')) entry.target.classList.toggle("right-in", entry.isIntersecting);
            if (entry.target.classList.contains('anim_up')) entry.target.classList.toggle("up-in", entry.isIntersecting);
            if (entry.target.classList.contains('anim_down')) entry.target.classList.toggle("down-in", entry.isIntersecting);
            if (entry.target.classList.contains('anim_roll')) entry.target.classList.toggle("roll-in", entry.isIntersecting);
            else entry.target.classList.toggle("right-in", entry.isIntersecting);
        }), 
        {
            rootMargin: "20px"
        }
    });

    observe_anim.forEach(card => {
        observer.observe(card);
    })
})


let links = [

    ['Packages/epic.css'],
    ['Packages/colour.css'],
    ['Packages/sizes.css'],
    ['Packages/style.css'],
    ['Packages/classes.css'],
    ['Packages/lg_classes.css'],
    ['Packages/md_classes.css'],

    ['Packages/font.css'],
    ['Packages/icon.css'], 
    ['Packages/anim.css']

]

for (let i = 0; i < links.length; i++) {
    let linked = document.createElement('link');
    linked.type = 'text/css';
    linked.rel = 'stylesheet';
    linked.media = 'all'
    linked.href = links[i];
    
    document.querySelector('head').append(linked);    
}