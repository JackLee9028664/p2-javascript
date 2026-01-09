let activiteiten =  ["gamen","rennen","slapen"];


let voorwerp  =   ["controler","schoenen", "kussen"];


document.getElementById("vandaag").style.display = "none";

function tekst() {
let randomActiviteit = Math.floor(Math.random() * activiteiten.length);
let randomActiviteitkeuze = activiteiten[randomActiviteit]

let randomvoorwerp = Math.floor(Math.random() * voorwerp.length);
let randomVoorwerpkeuze = voorwerp[randomvoorwerp]

    document.getElementById("vandaag").innerHTML = "Vandaag moet jij " + randomActiviteitkeuze  + "met " + randomVoorwerpkeuze;
    document.getElementById("vandaag").style.display = "block";
}
