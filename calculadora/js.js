let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", inserir);
}

btnClear = document.getElementById("c-button");
btnClear.addEventListener("click", limpar);

btnErase = document.getElementById("erase-button");
btnErase.addEventListener("click", voltar);

btnCalc = document.getElementById("calc");
btnCalc.addEventListener("click", calcular);

function inserir(event) {
  let btn = event.currentTarget;
  let btnValue = btn.getAttribute("btn-value");

  var x = document.getElementById("painel").innerHTML;
  document.getElementById("painel").innerHTML = x + btnValue;
}
function limpar() {
  document.getElementById("painel").innerHTML = "";
}
function voltar() {
  var x = document.getElementById("painel").innerHTML;
  document.getElementById("painel").innerHTML = x.substring(0, x.length - 1);
}
function calcular() {
  var x = document.getElementById("painel").innerHTML;
  if (x) {
    document.getElementById("painel").innerHTML = eval(x);
  } else {
    document.getElementById("painel").innerHTML = "Empty";
  }
}
let teclas = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "9",
  "*",
  "-",
  "+",
  "Enter",
  "/",
  "=",
  "Backspace",
  "c",
  ".",
];
window.addEventListener("keydown", (event) => {
  if (teclas.includes(event.key)) {
    let painel = document.getElementById("painel");

    if (event.key == "Backspace") {
      voltar();
    } else if (event.key == "c") {
      limpar();
    } else if (event.key == "Enter" || event.key == "=") {
      calcular();
    } else {
      painel.innerHTML += event.key;
    }
  }
});
