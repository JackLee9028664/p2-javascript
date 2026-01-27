myInterval = setInterval(setColor, 500);
 
function setColor() {
  document.body.style.backgroundColor = x.style.backgroundColor == "blue" ? "pink" : "blue";
}
 
