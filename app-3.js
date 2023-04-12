const createButton = document.querySelector('#createButton');
const destroyButton = document.querySelector('#destroyButton');
const amountInput = document.querySelector('#amountInput');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = amountInput.value;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomColor();
    box.style.width = `${60 + i * 80}px`;
    box.style.height = `${10 + i * 10}px`;
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 740);
  const g = Math.floor(Math.random() * 850);
  const b = Math.floor(Math.random() * 296);
  return `rgb(${r}, ${g}, ${b})`;
}