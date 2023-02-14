import './slider'
import { modals, tabsFunction, forms, changeModalState, timer, images } from './modules/modules';

window.addEventListener('DOMContentLoaded', () => {

  const modalState = {};
  const deadline = '2023-02-20';

  changeModalState(modalState);

  modals();

  tabsFunction({
    headerSelector: '.glazing_slider',
    tabsSelector: '.glazing_block',
    contentsSelector: '.glazing_content',
    activeClass: 'active'
  })
  tabsFunction({
    headerSelector: '.decoration_slider',
    tabsSelector: '.no_click',
    contentsSelector: '.decoration_content > div > div',
    activeClass: 'after_click'
  })

  tabsFunction({
    headerSelector: '.balcon_icons',
    tabsSelector: '.balcon_icons_img',
    contentsSelector: '.big_img > img',
    activeClass: 'do_image_more',
    display: 'inline-block'
  })

  forms(modalState);

  timer('.container1', deadline);

  images();
})
