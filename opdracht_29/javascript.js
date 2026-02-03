  
  let InPut = document.getElementById("naamVeld");
    document.getElementById("tekst");

let knop = document.getElementById("button");
knop.addEventListener("click", react);

 
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function react() {
     let naam = InPut.value;
if(naam === "18") {
    document.getElementById("tekst").innerHTML = "you can go to the website you want to go (シ_ _)シ";
     document.body.style.backgroundColor = "green";
  } else {
     document.body.style.backgroundColor = "red";
  document.getElementById("tekst").innerHTML = "you are too young get out! ( ⋋ · ⋌ ) very anger";
  }
}