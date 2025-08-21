const navLinks = document.querySelectorAll('.nav-link');
// console.log('🚀 ~ navLinks:', navLinks);

navLinks.forEach((navLink, idx, arr) => {
  // console.log('🚀 ~ navLink:', navLink);
  // console.log('🚀 ~ idx:', idx);
  // console.log('🚀 ~ arr:', arr);

  const mobileMenu = document.querySelector('#navbarsExample01');

  navLink.onclick = () => {
    const isMenuOpen = mobileMenu.classList.contains('show');
    console.log('🚀 ~ isMenuOpen:', isMenuOpen);

    if (isMenuOpen) {
      console.log('Close menu');

      mobileMenu.classList.remove('show');
    }
  };
});
