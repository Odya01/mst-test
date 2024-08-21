const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submitBtn');

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    submitBtn.disabled = false; // Активируем кнопку
  } else {
    submitBtn.disabled = true;  // Отключаем кнопку
  }
});



const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
