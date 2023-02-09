const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (ev) => {
        if (ev.target) {
          ev.preventDefault();
        }

        modal.style.display = 'block';
        // document.body.classList.add('modal-open')
        document.body.style.overflow = 'hidden';
      })
    })

    const closeModal = () => {
      modal.style.display = 'none';
      // document.body.classList.remove('modal-open')
      document.body.style.overflow = '';
    }

    close.addEventListener('click', () => {
      closeModal()
    })

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal()
      }
    })
  }

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block'
      document.body.style.overflow = '';
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
  bindModal('.phone_link', '.popup', '.popup .popup_close')
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)

  // showModalByTime('.popup', 60000);
};



export default modals;