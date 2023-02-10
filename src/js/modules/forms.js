export const forms = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const phoneInputs = document.querySelectorAll('input[name="user_phone"')

  phoneInputs.forEach(phoneInput => {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/, '')
    })
  })

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро с вами свяжемся',
    failure: 'Что-то пошло не так'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    })
  }

  forms.forEach(form => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      const formData = new FormData(form);

      postData('assets/server.php', formData)
        .then(res => {
          console.log(res)
          statusMessage.textContent = message.success;
        })
        .catch(() => statusMessage.textContent = message.failure)
        .finally(() => {
          console.log(statusMessage.textContent)
          clearInputs();
          setTimeout(() => {
            statusMessage.remove()
          }, 5000);
        })
    })
  })
}
