export const timer = (id, deadline) => {

  const addZero = (num) => {
    return num <= 9 ? '0' + num : num;
  }

  const getTimeRemaining = (endTime) => {
    const time = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 * 60 * 60) % 24);
    const days = Math.floor((time / (1000 * 60 * 60 * 24)));

    return {
      'total': time,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days
    };
  };

  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');

    const updateClock = () => {
      const time = getTimeRemaining(endTime);
      days.textContent = addZero(time.days);
      hours.textContent = addZero(time.hours);
      minutes.textContent = addZero(time.minutes);
      seconds.textContent = addZero(time.seconds);

      if (time.total <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    }

    updateClock();

    const timeInterval = setInterval(updateClock, 1000);

  };

  setClock(id, deadline);

};
