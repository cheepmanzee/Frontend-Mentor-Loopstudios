const $burger = document.querySelector('.nav__burger');
const $menuDrop = document.querySelector('.menu-drop');
const $nav = document.querySelector('.nav');
const $body = document.querySelector('body');
const $title = document.querySelector('h1');

$burger.addEventListener('click', function() {
   if ($menuDrop.classList.contains('drop')) {
      $menuDrop.classList.remove('drop');
      $body.style.overflowY = 'initial';
      $burger.innerHTML = '<img src="img/icon-hamburger.svg">';
      
   } else {
      $menuDrop.classList.add('drop');
      $body.style.overflowY = 'hidden';
      $burger.innerHTML = '<img src="img/icon-close.svg">';
   }
})

function scrollTitlePop() {
   var leaderTitle = document.querySelector('.leader__title h2');
   var leaderText = document.querySelector('.leader__title p');
   var position = leaderTitle.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.4;
   if (position < screenPosition) {
      leaderTitle.classList.add('scroll-pop');
      leaderText.classList.add('scroll-pop');
   }
}
function scrollCreationsPop() {
   var creations = document.querySelector('.creations');
   var position = creations.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.4;
   if (position < screenPosition) {
      creations.classList.add('scroll-pop')
   }
}

window.addEventListener('scroll', scrollTitlePop);
window.addEventListener('scroll', scrollCreationsPop);

window.addEventListener('load', () => {
   const preloader = document.querySelector('.preloader');
   preloader.classList.add('preload-fin');
   $title.classList.add('load-pop');
   $nav.classList.add('load-pop');
})

