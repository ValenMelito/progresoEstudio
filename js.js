let titulo= "Mi progreso en estudio";

let posicionTitulo = document.getElementById("titulo");

let i=0;

setInterval(agregarUnaLetra, 1000);//cada un segundo se va a activar la funcion agregar una letra
//funciona ahora quiero hacerlo con el efecto de la barrita titilando ="|", " ", "|";

function agregarUnaLetra(){
    const contador=i;
    if(i<titulo.length){//mientras i sea menor al total del titulo seleccionado esta funcion va a tener sentido
        //posicionTitulo.innerHTML += ;
        posicionTitulo.innerHTML += titulo.charAt(contador); //se le suma una letra mas a la posicion del titulo
        i++; 
    }   
}



