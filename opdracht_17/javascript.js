let box = document.getElementById("1c");


box.addEventListener("mouseover", hover);
box.addEventListener("mouseout", away );

function away() {
  box.style.backgroundColor = "black";
}

function hover() {
  box.style.backgroundColor = "yellow";
}

away()
hover() 