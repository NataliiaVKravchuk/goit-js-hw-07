const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputValue);

function onInputValue(event) {
  if (inputEl.value) {
    spanEl.textContent = inputEl.value.trim();
  } else {
    spanEl.textContent = 'Anonymous';
  }
}
