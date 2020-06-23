//Bootrstrap NAV stuff
$("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 

// Animation - https://tobiasahlin.com/moving-letters/#6
var textWrapper = document.querySelector('.animated-1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
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
let aboutNav = document.querySelector('#nav-about');
let about = document.querySelector('#about');
let goldNav = document.querySelector('#nav-gold');
let gold = document.querySelector('#gold');
let blueNav = document.querySelector('#nav-blue');
let blue = document.querySelector('#blue');
let redNav = document.querySelector('#nav-red');
let red = document.querySelector('#red');
let contactNav = document.querySelector('#nav-contact');
let contact = document.querySelector('#contact');


homeNav.addEventListener('click', toggleHome);
aboutNav.addEventListener('click', toggleAbout);
goldNav.addEventListener('click', toggleGold);
blueNav.addEventListener('click', toggleBlue);
redNav.addEventListener('click', toggleRed);
contactNav.addEventListener('click', toggleContact);

function toggleHome(e) {
    e.preventDefault();
    home.style.display = 'flex';
    about.style.display = 'none';
    gold.style.display = 'none';
    blue.style.display = 'none';
    red.style.display = 'none';
    contact.style.display = 'none';
}
function toggleAbout(e) {
    e.preventDefault();
    about.style.display = 'flex';
    home.style.display = 'none';
    gold.style.display = 'none';
    blue.style.display = 'none';
    red.style.display = 'none';
    contact.style.display = 'none';
}
function toggleGold(e) {
    e.preventDefault();
    gold.style.display = 'flex';
    home.style.display = 'none';
    about.style.display = 'none';
    blue.style.display = 'none';
    red.style.display = 'none';
    contact.style.display = 'none';
}
function toggleBlue(e) {
    e.preventDefault();
    blue.style.display = 'flex';
    home.style.display = 'none';
    about.style.display = 'none';
    gold.style.display = 'none';
    red.style.display = 'none';
    contact.style.display = 'none';
}
function toggleRed(e) {
    e.preventDefault();
    red.style.display = 'flex';
    home.style.display = 'none';
    about.style.display = 'none';
    gold.style.display = 'none';
    blue.style.display = 'none';
    contact.style.display = 'none';
}
function toggleContact(e) {
    e.preventDefault();
    contact.style.display = 'flex';
    home.style.display = 'none';
    about.style.display = 'none';
    gold.style.display = 'none';
    blue.style.display = 'none';
    red.style.display = 'none';
}