const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let interval;

  return (seconds) => {
    // Очищаем предыдущий таймер, если он существует
    if (interval) {
      clearInterval(interval)
    }

    interval = setInterval(() => {
      // Уменьшаем количество секунд
      seconds--

      // Вычисляем часы, минуты и секунды
      const hours = Math.floor(seconds / 3600)
      const minutes = Math.floor((seconds % 3600) / 60)
      const secs = seconds % 60

      // Форматируем время
      const time = [hours, minutes, secs]
          .map(v => v < 10 ? "0" + v : v)  // Добавляем ноль, если необходимо
          .join(":")

      console.log(time);
      timerEl.textContent = time

      // Останавливаем таймер, когда время истекло
      if (seconds <= 0) {
        clearInterval(interval)
        timerEl.textContent = 'hh:mm:ss'
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
