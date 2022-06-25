export default function initMenuMobile() {
  const btnMobile = document.getElementById('js-btn-menu-mobile');
  const menuOverlay = document.querySelector('.js-overlay');

  function openMenuMobile() {
    document.documentElement.classList.toggle('menu-aberto');
  }

  btnMobile.addEventListener('click', openMenuMobile);

  menuOverlay.addEventListener('click', openMenuMobile);
}
