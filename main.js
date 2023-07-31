const rInput = document.querySelector("#r");
const rNumber = document.querySelector("#rNumber");
const gInput = document.querySelector("#g");
const gNumber = document.querySelector("#gNumber");
const bInput = document.querySelector("#b");
const bNumber = document.querySelector("#bNumber");

let red = rInput.value;
let green = gInput.value;
let blue = bInput.value;

rInput.addEventListener("mousemove", (e) => {
  red = e.target.value;
  rNumber.textContent = red;
  colorChanger(red, green, blue);
})

gInput.addEventListener("mousemove", (e) => {
  green = e.target.value;
  gNumber.textContent = green;
  colorChanger(red, green, blue);

})

bInput.addEventListener("mousemove", (e) => {
  blue = e.target.value;
  bNumber.textContent = blue;
  colorChanger(red, green, blue);
})

function colorChanger(red, green, blue) {
  let color = `rgb(${red}, ${green}, ${blue})`
  document.body.style.backgroundColor = color;
}