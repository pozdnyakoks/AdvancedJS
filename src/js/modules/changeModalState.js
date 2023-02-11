import { checkNumInputs } from './checkNumInputs';

export const changeModalState = (state) => {
  const windowForms = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfiles = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionToElems = (event, elements, prop) => {
    elements.forEach((element, i) => {
      element.addEventListener(event, () => {
        switch (element.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case 'INPUT':
            if (element.getAttribute('type') === 'checkbox') {
              i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              elements.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              })
            } else {
              state[prop] = element.value;
            }
            break
          case 'SELECT':
            state[prop] = element.value;
            break;
        }
      })
    })
  }

  bindActionToElems('click', windowForms, 'form');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfiles, 'profile')
}
