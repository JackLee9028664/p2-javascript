let knop = document.getElementById("button");

knop.addEventListener("click", begroet);

function begroet() {
let InPut = document.getElementById("naamVeld");
let naam = InPut.value;
let resultaat = document.getElementById("tekst");
  resultaat.innerHTML = "Hallo " + naam + "!";
}

