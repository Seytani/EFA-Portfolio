//Bootrstrap NAV stuff
$("[data-trigger]").on("click", function () {
    var trigger_id = $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function (e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
});

// Animation - https://tobiasahlin.com/moving-letters/#6
var textWrapper = document.querySelector('.animated-1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.animated-1 .letter',
        translateY: ["2.2em", 0],
        translateZ: 0,
        duration: 5000,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.animated-1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 100
    });


//My code
window.addEventListener('load', toggleHome);

let homeNav = document.querySelector('#nav-home');
let home = document.querySelector('#home');
let projNav = document.querySelector('#nav-projects');
let projects = document.querySelector('#projects');
let aboutNav = document.querySelector('#nav-about');
let about = document.querySelector('#about');
let contactNav = document.querySelector('#nav-contact');
let contact = document.querySelector('#contact');


homeNav.addEventListener('click', toggleHome);
projNav.addEventListener('click', toggleProjects);
aboutNav.addEventListener('click', toggleAbout);
contactNav.addEventListener('click', toggleContact);

function toggleHome(e) {
    e.preventDefault();
    home.style.display = 'flex';
    about.style.display = 'none';
    projects.style.display = 'none';
    contact.style.display = 'none';
}
function toggleAbout(e) {
    e.preventDefault();
    about.style.display = 'flex';
    home.style.display = 'none';
    projects.style.display = 'none';
    contact.style.display = 'none';
}
function toggleProjects(e) {
    e.preventDefault();
    projects.style.display = 'flex';
    home.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'none';
}
function toggleContact(e) {
    e.preventDefault();
    contact.style.display = 'flex';
    home.style.display = 'none';
    about.style.display = 'none';
    projects.style.display = 'none';
}