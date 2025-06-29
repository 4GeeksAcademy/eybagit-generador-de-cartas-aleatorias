import "bootstrap";
import "./style.css";

const valores     = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"],
      palos       = ["corazones","diamantes","treboles","picas"],
      simbolos    = {corazones:"♥",diamantes:"♦",treboles:"♣",picas:"♠"},
      cajaCarta   = document.querySelector("#caja-carta"),
      inputAncho  = document.getElementById("ancho-carta"),
      inputAlto   = document.getElementById("alto-carta"),
      btnNueva    = document.getElementById("boton-nueva-carta"),
      btnTimer    = document.getElementById("boton-temporizador");

let idTemporizador;

const mostrarCartaAleatoria = () => {
  const ancho   = parseInt(inputAncho.value) || 380,
        alto    = parseInt(inputAlto.value)  || 500,
        valor   = valores[Math.floor(Math.random() * valores.length)],
        palo    = palos[Math.floor(Math.random() * palos.length)],
        simbolo = simbolos[palo];

  cajaCarta.innerHTML = `
    <div class="carta ${palo}"
         style="width:${ancho}px;height:${alto}px;font-size:${Math.round(alto/2.5)}px">
      <div class="simbolo superior"
           style="font-size:${Math.round(alto/4)}px">${simbolo}</div>
      <span>${valor}</span>
      <div class="simbolo inferior"
           style="font-size:${Math.round(alto/4)}px">${simbolo}</div>
    </div>`;
};

const alternarTemporizador = () => {
  if (idTemporizador) clearInterval(idTemporizador), idTemporizador = 0;
  else idTemporizador = setInterval(mostrarCartaAleatoria, 10000);
  btnTimer.textContent = idTemporizador ? "Temporizador ON" : "Temporizador OFF";
};

btnNueva.onclick          = mostrarCartaAleatoria;
btnTimer.onclick          = alternarTemporizador;
inputAncho.oninput        = mostrarCartaAleatoria;
inputAlto.oninput         = mostrarCartaAleatoria;
window.onload             = mostrarCartaAleatoria;
