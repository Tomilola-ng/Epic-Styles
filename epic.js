let qs = (e) => document.querySelector(e);
let qsa = (e) => document.querySelectorAll(e);

document.addEventListener('DOMContentLoaded', () => {
    // Const variables
    const h_calcs = document.querySelectorAll('.h-calc');

    const epic_demo_div = qs("#epic_demo_div");
    const epic_demo_div_classlist = epic_demo_div.classList;
    const epic_applied_classes = qs("#epic_applied_classes");
    let epic_toggle_class_title = () => qsa(".epic_toggle_class_title");

    const menuBtn = qs(".epic_menu-btn");
    const closeMenuBtn = qs(".epic_close-nav");
    const copyBtns = qsa(".epic_copy-btns");

    const observe_anim = qsa('.observe_anim');

    // Event Listeners
    menuBtn.addEventListener("click", dropmenu);
    closeMenuBtn.addEventListener("click", dropmenu);

    // For Each Functions
    h_calcs.forEach(e => {
        if (e.clientWidth > 768) {
            let tall = e.offsetHeight;
            e.style.height = tall + 'px' 
        }
    });

    epic_toggle_class_title().forEach( (btns) => {
        btns.addEventListener('click', (e) => {
            epic_demo_div.classList.toggle(e.target.title);
            e.target.classList.toggle('secondary-alt');
            e.target.classList.toggle('btn');
        });
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

if (!document.querySelector('body').classList.contains('font-none')) {
    let linked = document.createElement('link');
    linked.setAttribute('type','text/css');
    linked.setAttribute('rel','stylesheet');
    linked.setAttribute('href', 'https://epic-styles.github.io/font.css' );
    
    document.querySelector('head').append(linked);    
}