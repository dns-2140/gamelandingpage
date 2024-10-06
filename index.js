const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
toggleButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

//scroll animation
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  console.log(window.scrollY);
  if (this.window.scrollY > 622) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
