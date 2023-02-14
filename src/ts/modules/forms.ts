import { checkNumInputs } from './checkNumInputs';

export const forms = (state: { [n: string]: string }) => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');

  checkNumInputs('input[name="user_phone"');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро с вами свяжемся',
    failure: 'Что-то пошло не так',
  };

  const postData = async (url: string, data: FormData) => {
    document.querySelector('.status').textContent = message.loading;
    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  forms.forEach((form) => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      const formData = new FormData(form);
      if (form.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData)
        .then((res) => {
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};
