const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

hamburger.addEventListener('click', openMenu);
navLink.forEach((n) => n.addEventListener('click', closeMenu));
navMenu.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  closeMenu();
});

function openMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.add('nav-open');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('nav-open');
}

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    closeMenu();
  }
});
