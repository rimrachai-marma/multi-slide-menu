const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);

// START MENU MODAL
const menu = $('[data-menu]');
const btnOpenMenu = $('[data-btn-open-menu]');

btnOpenMenu.addEventListener('click', () => {
  menu.showModal();
});

menu.addEventListener('click', (event) => {
  const dialogDimensions = menu.getBoundingClientRect();
  if (
    event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) {
    menu.close();
  }
});
// END MENU MODAL

// START MENU TRIGGER
const btnsMenuTrigger = $all('[data-btn-menu-trigger]');
const btnsMenuBack = $all('[data-btn-menu-back]');

btnsMenuTrigger.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.currentTarget.parentNode.nextElementSibling.setAttribute('open', '');
  });
});

btnsMenuBack.forEach((element) => {
  element.addEventListener('click', () => {
    event.currentTarget.parentNode.parentNode.removeAttribute('open');
  });
});
// END MENU TRIGGER
