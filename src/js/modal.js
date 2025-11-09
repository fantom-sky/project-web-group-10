(() => {
  const refs = {
    subscribeForm: document.querySelector('.subscribe-form'),
    closeModalBtns: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    emailInput: document.getElementById('subscribe-email'),
  };

  refs.subscribeForm.addEventListener('submit', handleFormSubmit);

  refs.closeModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  function handleFormSubmit(event) {
    event.preventDefault(); 
    
    if (refs.emailInput.checkValidity()) {
      toggleModal();
    } else {
      console.log('Поле Email не заповнене або не валідне.');
    }
  }
})();