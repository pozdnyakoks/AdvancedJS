export const modals = () => {
  function bindModal({ triggerSelector: string, modalSelector: string, closeSelector: string, closeClickOverlay = true }) {

    const calcScroll = (): number => {
      const div = document.createElement('div');
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);
      const scrollWidth:number = div.offsetWidth - div.clientWidth;
      div.remove();

      return scrollWidth;
    }

    const triggers = document.querySelectorAll(triggerSelector) as NodeListOf<HTMLDivElement>;
    const modal = document.querySelector(modalSelector) as HTMLDivElement;
    const close = document.querySelector(closeSelector) as HTMLDivElement;
    const windows = document.querySelectorAll('[data-modal]') as NodeListOf<HTMLDivElement>;
    const scroll = calcScroll();

    const closeWindows = ():void => { 
      windows.forEach(window => {
        window.style.display = 'none';
        document.body.style.marginRight = '0';
      })
    }

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (ev: Event) => {
        if (ev.target) {
          ev.preventDefault();
        }

        closeWindows()

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        close.focus();
      })
    })

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    })

    const closeModal = ():void => {
      closeWindows();
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }

    close.addEventListener('click', () => {
      closeModal()
    })

    modal.addEventListener('click', (e: Event) => {
      if (e.target === modal && closeClickOverlay) {
        closeModal();
        closeWindows();
      }
    })
  }

  const showModalByTime = (selector: string, time: number):void => {
    setTimeout(() => {
      (document.querySelector(selector) as HTMLDivElement).style.display = 'block'
      document.body.style.overflow = '';
    }, time);
  }

  bindModal({
    triggerSelector: '.popup_engineer_btn',
    modalSelector: '.popup_engineer',
    closeSelector: '.popup_engineer .popup_close'
  })
  bindModal({
    triggerSelector: '.phone_link',
    modalSelector: '.popup',
    closeSelector: '.popup .popup_close'
  })
  bindModal({
    triggerSelector: '.popup_calc_btn',
    modalSelector: '.popup_calc',
    closeSelector: '.popup_calc_close'
  })
  bindModal({
    triggerSelector: '.popup_calc_button',
    modalSelector: '.popup_calc_profile',
    closeSelector: '.popup_calc_profile_close',
    closeClickOverlay: false
  })
  bindModal({
    triggerSelector: '.popup_calc_profile_button',
    modalSelector: '.popup_calc_end',
    closeSelector: '.popup_calc_end_close',
    closeClickOverlay: false
  })

  showModalByTime('.popup', 60000);
};
