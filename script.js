const header = document.querySelector("header");

window.addEventListener ("scroll", function () {
    header.classList.toggle ("sticky", window.scrollY > 0);
});


document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const navcol = document.getElementById("navcol");
    const close = document.getElementById("close");

    menu.addEventListener("click", function() {
        navcol.classList.toggle("open");
    });
    close.addEventListener("click", function() {
        navcol.classList.remove("open");
    });
});
 

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})
sr.reveal ('.home-text', {delay:350, origin:'left'})
sr.reveal ('.home-image', {delay:350, origin:'right'})
sr.reveal ('.sub-service,.portfolio,.about,.services,.more,.contact', {delay:200, origin:'bottom'})






