const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submitBtn');

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    submitBtn.disabled = false; // Активируем кнопку
  } else {
    submitBtn.disabled = true;  // Отключаем кнопку
  }
});