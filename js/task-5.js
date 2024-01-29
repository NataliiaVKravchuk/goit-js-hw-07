function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.body;
const spanElem = document.querySelector(".color");

const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", onBtnClick);

function onBtnClick() {
    const randomColor = getRandomHexColor();
    bodyElement.style.backgroundColor = randomColor;
    spanElem.textContent = randomColor;
}

  