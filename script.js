document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.mobile-menu-icon');
  const navLinks = document.querySelector('.nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
