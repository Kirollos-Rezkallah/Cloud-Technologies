const navbar = document.getElementById('MainNavbar');
document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > navbar.clientHeight) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});