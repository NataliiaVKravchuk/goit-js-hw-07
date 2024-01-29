function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  box: document.getElementById("boxes"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
};


const { box, buttonCreate, buttonDestroy, input } = refs;

buttonCreate.addEventListener("click", onClick);
buttonDestroy.addEventListener("click", onClick);

function onClick(e) {
  if (!box.children.length) {
    createBoxes(input.value);
    return;
  }
  destroyBoxes();
}


function createBoxes(amount) {

if (isNaN(amount) || amount < 1 || amount > 100) {
  return;
}
  let size = 30;
  const array = [];
  for (let index = 1; index <= amount; index += 1) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    size += 10;
    div.style.backgroundColor = getRandomHexColor();
    array.push(div);
  }

  box.append(...array);
}

function destroyBoxes() {
  box.innerHTML = "";
  input.value = "";
}
