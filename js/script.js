// Quando a página carregar, executa a função start
window.addEventListener('load', start);

function start() {
  var rangeInput = document.querySelectorAll('.rangeInput');

  for (var i = 0; i < rangeInput.length; i++) {
    rangeInput[i].addEventListener('input', rangeSubmit);
  }

  var resetButton = document.querySelector('#resetButton');
  resetButton.addEventListener('click', reset);
}

/* Utilização de funções com JavaScript */
function rangeSubmit(event) {
  event.preventDefault;

  var rangeRed = document.querySelector("#rangeRed").value;
  var rangeGreen = document.querySelector("#rangeGreen").value;
  var rangeBlue = document.querySelector("#rangeBlue").value;

  var valueRed = document.querySelector("#valueRed");
  var valueGreen = document.querySelector("#valueGreen");
  var valueBlue = document.querySelector("#valueBlue");

  var display = document.querySelector("#display");

  var valueHex = document.querySelector('#valueHex');

  valueRed.value = rangeRed;
  valueGreen.value = rangeGreen;
  valueBlue.value = rangeBlue;

  /* Manipulação direta de CSS com JavaScript */
  display.style.background = "rgb(" + rangeRed + ", " + rangeGreen + ", " + rangeBlue + ")";

  var colorHex = rgbToHex(rangeRed, rangeGreen, rangeBlue);

  valueHex.value = colorHex;

}

function reset(event) {
  event.preventDefault;

  var rangeInput = document.querySelectorAll('.rangeInput');
  for (var i = 0; i < rangeInput.length; i++) {
    rangeInput[i].value = 0;
  }

  var valueColor = document.querySelectorAll('.valueColor');
  for (var i = 0; i < valueColor.length; i++) {
    valueColor[i].value = 0;
  }

  var display = document.querySelector("#display");
  display.style.background = "rgb(0, 0, 0)";

  var valueHex = document.querySelector('#valueHex');
  valueHex.value = '#000000';
}

var rgbToHex = function (r, g, b) { 
  var r = Number(r).toString(16);
  var g = Number(g).toString(16);
  var b = Number(b).toString(16);

  if (r.length < 2) {
    r = "0" + r;
  }
  if (g.length < 2) {
       g = "0" + g;
  }
  if (b.length < 2) {
       b = "0" + b;
  }
  return '#' + r + g + b;
};