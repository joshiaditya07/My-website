const nav = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');
const navToggleIcon = navToggle.querySelector('i');
const navLinks = document.querySelectorAll('.nav-links a');

const toggleMenu = () => {
  const isOpen = nav.classList.toggle('open');
  navToggleIcon.classList.toggle('bx-menu', !isOpen);
  navToggleIcon.classList.toggle('bx-x', isOpen);
};

navToggle.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) toggleMenu();
  });
});