const textO = { hide: true };

document.write('<button onclick="hide(textO)">Mostrar / Ocultar</button>');

const text = document.getElementById("text");

function hide(textO) {
  textO.hide = !textO.hide;
  if (textO.hide) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
