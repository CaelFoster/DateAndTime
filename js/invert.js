



const button = document.getElementsByClassName("button")[0];
const text = document.querySelector(".button h2");
let toggle = false;
button.addEventListener("click", (e) => {
  toggle = !toggle;

  const body = document.querySelector('*');

  if (toggle === true) {
    text.innerText = ("light mode");
    body.style.filter = "invert(1)";
  } else {
    text.innerText = ("dark mode");
    body.style.filter = "invert(0)";
  }
});



