export const tabsFunction = ({ headerSelector, tabsSelector, contentsSelector, activeClass }) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabsSelector);
  const contents = document.querySelectorAll(contentsSelector);

  const hideTabContent = () => {
    contents.forEach(content => {
      content.style.display = 'none';
    });

    tabs.forEach(tab => {
      tab.classList.remove(activeClass)
    })
  }

  const showTabContent = (i = 0) => {
    contents[i].style.display = 'block';
    tabs[i].classList.add(activeClass)
  }

  hideTabContent();
  showTabContent();

  const showTab = (ev) => {
    const target = ev.target;
    const selector = tabsSelector.replace(/\./, '')
    if (target &&
      (target.classList.contains(selector) ||
        target.parentNode.classList.contains(selector))) {
      tabs.forEach((tab, index) => {
        if (target == tab || target.parentNode == tab) {
          hideTabContent();
          showTabContent(index)
        }
      })
    }
  }

  header.addEventListener('click', (ev) => {
    showTab(ev)
  })

  header.addEventListener('keydown', (ev) => {
    if (ev.code == 'Enter') {
      showTab(ev);
    }
  })
};

