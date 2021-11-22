
 var divSize = 16;
 let divZoom = document.getElementById("zoom");
 function zoomIn() {
  divSize += 1;
     divZoom.style.fontSize = divSize + "px";
     console.log(divZoom.style.fontSize);
    
 }
 function zoomOut() {
let divZoom = document.getElementById("zoom");
    divSize -= 1;
    divZoom.style.fontSize = divSize + "px";
 }

 let actuelPx = document.getElementById("px");
 actuelPx.innerText= divSize + "px";





     
    
 
 