let box = document.getElementById("tekst")
let getal = 6
let pass =document.getElementById("meer")
pass.addEventListener("input", index)

function index() {
 
if(pass >  getal) {
box.innerHTML = "Sterk wachtwoord!";
} else
box.innerHTML = "Wachtwoord te kort";
}
