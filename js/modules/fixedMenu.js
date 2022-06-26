export default function initFixedMenu() {
  const header = document.getElementById('js-header');
  const btnMobileImage = document.querySelector('.btn-mobile img');
  function fixedMenu() {
    if (window.pageYOffset > 80) {
      header.classList.add('fixed-menu');
      btnMobileImage.setAttribute('src', './img/menu-mobile-color.svg');
    } else {
      header.classList.remove('fixed-menu');
      btnMobileImage.setAttribute('src', './img/menu-mobile.svg');
    }
  }

  document.addEventListener('scroll', fixedMenu);
}
