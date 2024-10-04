const menuToggle = document.querySelector('.nav__menu-toggle');
const navLinks = document.querySelector('.nav__links');

menuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

console.log('test');
