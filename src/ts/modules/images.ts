export const images = () => {
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.works');
  const bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  workSection.addEventListener('click', (ev: Event) => {
    ev.preventDefault();
    let target = ev.target as Element;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      const path = (<Element>target.parentNode).getAttribute('href');
      bigImage.setAttribute('src', path);
      bigImage.style.height = '80%';
      bigImage.style.padding = '20px';
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};
