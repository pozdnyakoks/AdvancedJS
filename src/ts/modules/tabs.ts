export const tabsFunction = ({
  headerSelector,
  tabsSelector,
  contentsSelector,
  activeClass,
  display = 'block',
}: {
  headerSelector: string;
  tabsSelector: string;
  contentsSelector: string;
  activeClass: string;
  display?: string;
}) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabsSelector);
  const contents = document.querySelectorAll(
    contentsSelector
  ) as NodeListOf<HTMLDivElement>;

  const hideTabContent = () => {
    contents.forEach((content) => {
      content.style.display = 'none';
    });

    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    contents[i].style.display = display;
    tabs[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  const showTab = (ev: Event) => {
    const target = ev.target as Element;
    const selector = tabsSelector.replace(/\./, '');
    if (
      target &&
      (target.classList.contains(selector) ||
        (<Element>target.parentNode).classList.contains(selector))
    ) {
      tabs.forEach((tab, index) => {
        if (target == tab || target.parentNode == tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  };

  header.addEventListener('click', (ev: Event) => {
    showTab(ev);
  });

  header.addEventListener('keydown', (ev: KeyboardEvent) => {
    if (ev.code == 'Enter') {
      showTab(ev);
    }
  });
};
