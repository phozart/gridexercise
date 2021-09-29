let gridsize = 100;
let pos = 1;
createGrid();
function createGrid() {
  const main = document.getElementById("target");
  for (let i = 1; i <= gridsize; i++) {
    var div = document.createElement("div");
    div.id = "s" + i;
    div.innerText = i;
    main.appendChild(div);
  } 
} 
 