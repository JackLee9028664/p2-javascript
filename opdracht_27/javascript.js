let starter = [{
naam: "rowlet",
type: "grass",
powerlevel: "5",
emoji: "🌿",
},  {
naam: "litten",
type: "fire",
powerlevel: "5",
emoji: "🔥",
},  {
naam: "Popplio",
type: "water",
powerlevel: "5",
emoji: "💧",
},  ]

let button = document.getElementById("box");
button.addEventListener("click", choose);

function choose() {
let randomStarter  = Math.floor(Math.random() * starter.length);
let randomStarterkeuze = starter[randomStarter]

document.getElementById("1c").innerHTML =
  randomStarterkeuze.emoji +
  randomStarterkeuze.naam + "<br>" +
  "Type: " + randomStarterkeuze.type + "<br>" +
  "Powerlevel: " + randomStarterkeuze.powerlevel;
}
