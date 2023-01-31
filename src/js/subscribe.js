import Pristine from 'pristinejs';

const SUBSCRIBE_FORM = document.querySelector('.subscribe__form');
const EMAIL_FIELD = SUBSCRIBE_FORM.querySelector('.subscribe__form-email');
const SUBMIT_FORM = SUBSCRIBE_FORM.querySelector('.subscribe__form-button');
const SUBSCRIBE_MODAL = document.querySelector('.subscribe__modal');
const MODAL_BUTTON = document.querySelector('.subscribe__modal-button');

const showModal = () => {
  SUBSCRIBE_MODAL.classList.remove('subscribe__modal--closed');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const hideModal = () => {
  SUBSCRIBE_MODAL.classList.add('subscribe__modal--closed');
  EMAIL_FIELD.value = '';
};

function onPopupEscKeydown(evt){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideModal();
  }
}

SUBSCRIBE_MODAL.addEventListener('click', (evt) => {
  if (!evt.target.closest('.subscribe__modal-content')) {
    hideModal();
  }
});

MODAL_BUTTON.addEventListener('click', ()=> {
  hideModal();
});


const pristine = new Pristine(SUBSCRIBE_FORM, {
  classTo: 'subscribe__form-wrapper',
  errorTextParent: 'subscribe__form-wrapper',
  errorTextClass: 'subscribe__form-wrapper-text',
});

const validateField = (evt) => {
  if (evt.target.pristine.errors.length > 0 ) {
    EMAIL_FIELD.setAttribute('style', 'outline: 3px solid #ff5757;  outline-offset: -3px;');
    SUBMIT_FORM.disabled = true;
  } else {
    EMAIL_FIELD.setAttribute('style', 'outline: 3px solid #83b3d3;  outline-offset: -3px;');
    SUBMIT_FORM.disabled = false;
  }
};

EMAIL_FIELD.addEventListener('input', validateField);

SUBSCRIBE_FORM.addEventListener('submit', (evt)=> {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    showModal();
  } else {
    EMAIL_FIELD.setAttribute('style', 'outline: 3px solid #ff5757;  outline-offset: -3px;');
  }
});

SUBSCRIBE_FORM.addEventListener('focusout', ()=> {
  if (EMAIL_FIELD.value === '') {
    pristine.reset();
    SUBMIT_FORM.disabled = false;
    EMAIL_FIELD.setAttribute('style', 'outline: none;');
  }
});
