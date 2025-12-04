function groet_ochtend() {
    document.getElementById("tekst").innerHTML = ("Goedemorgen!");
    document.body.style.backgroundColor = "lightyellow";
    document.body.style.color = "black";
}

function groet_middag() {
    document.getElementById("tekst").innerHTML = ("Goedemiddag!");
    document.body.style.backgroundColor = "orange";
    document.body.style.color = "black";
}

function groet_avond() {
    document.getElementById("tekst").innerHTML =  ("Goedeavond!");
    document.body.style.backgroundColor = "darkblue";
    document.body.style.color = "white";
}


groet_ochtend();
groet_middag();
groet_avond();