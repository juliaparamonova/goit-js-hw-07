function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector('.change-color')
  btnEl.addEventListener('click', () => {
      const newColor = getRandomHexColor();
      document.body.style.backgroundColor = newColor;
      document.querySelector('.color').textContent = newColor;
    });