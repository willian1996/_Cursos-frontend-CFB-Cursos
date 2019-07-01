var novoH1 = document.createElement('h1');
var listaCursos = document.getElementById("cfbcursos");
var novo = document.getElementById("novo");

var antigoP = listaCursos.childNodes[9];
var txtH = document.createTextNode(antigoP.innerHTML);
novoH1.appendChild(txtH);
listaCursos.replaceChild(novo, antigoP);