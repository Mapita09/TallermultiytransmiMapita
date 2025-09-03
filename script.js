console.log ("Que más wey!");

const titulo = document.getElementById ("PrincipalTitulo");
let estadoOriginal = true;

console.log(titulo);

titulo.innerText = "Have you ever tried this oneeee?";

titulo.addEventListener("click", () => {
    if(estadoOriginal === true) {
        titulo.innerText = "Dance break";
        titulo.style.color = "light pink";
    }


else { 
    titulo.innerText = "Titulo Bonito";
    titulo.style.color = "white";
}
     })
    
