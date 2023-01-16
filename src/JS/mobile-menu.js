(() => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const headerContainer = document.querySelector('.header-menu');
  const openMenuBtn = document.querySelector('.menu-open');
  const closeMenuBtn = document.querySelector('.menu-close');
  const body = document.getElementsByTagName('body')[0];

  const toggleMenu = () => {
    const isMenuOpen =
      headerContainer.getAttribute('aria-expanded') === 'true' || false;
    headerContainer.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.setAttribute('aria-hidden', isMenuOpen);
    headerContainer.classList.toggle('opened');
    mobileMenu.classList.toggle('is-hidden');
    body.classList.toggle('scroll-block');

    /* const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body); */
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.add('is-hidden');
    headerContainer.setAttribute('aria-expanded', false);
    body.classList.remove('scroll-block');
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
