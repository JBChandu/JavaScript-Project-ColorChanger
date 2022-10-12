const canvas = document.querySelector("#canvas");
const btn = document.querySelector("#button");

btn.addEventListener("click", (e) => {
  canvas.style.backgroundColor = randcolor();
});

function randcolor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let newColor = `rgb(${r}, ${g}, ${b})`;
  return newColor;
}
