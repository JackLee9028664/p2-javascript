function oud() {
prompt("in welk jaar ben je geboren is");
let naam = prompt("in welk jaar ben je geboren");
const geboortejaar = 2025 - prompt("in welk jaar ben je geboren");
document.getElementById("jaar").innerHTML = ("jij bent ongeveer "  + geboortejaar  + " jaar oud.") 
}