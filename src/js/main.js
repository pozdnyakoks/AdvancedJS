import './slider'
import { modals, tabsFunction } from './modules/modules';

window.addEventListener('DOMContentLoaded', () => {
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
})

