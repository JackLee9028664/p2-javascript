  let snacks = [];

function voegSnack() {
let snack = document.getElementById("hallo").value;

snacks.push(snack);
document.getElementById("Lijst").innerHTML += "<li>" +  snack;
 }