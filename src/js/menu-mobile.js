const NAVIGATION = document.querySelector('.page-header__nav');
const MENU_BUTTON = NAVIGATION.querySelector('.page-header__toogle');

const onButtonClick = () => {
  if (NAVIGATION.classList.contains('page-header__toogle--closed')) {
    NAVIGATION.classList.remove('page-header__toogle--closed');
    NAVIGATION.classList.add('page-header__toogle--opened');
  } else {
    NAVIGATION.classList.remove('page-header__toogle--opened');
    NAVIGATION.classList.add('page-header__toogle--closed');
  }
};

MENU_BUTTON.addEventListener('click', onButtonClick);
