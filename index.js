var buttonEncriptar = document.getElementById("htmlBotonEncriptar");
buttonEncriptar.onclick = tomarTexto;

var buttonCopiar = document.getElementById("htmlBotonCopiar");
buttonCopiar.onclick = copiarTexto;

var buttonDesencriptar = document.getElementById("htmlBotonDesencriptar");
buttonDesencriptar.onclick = desencriptarTexto;

function tomarTexto(){
    let textoEncriptar = document.getElementById("texto-encriptar");
    let texto = textoEncriptar.value;
    
    let ocultarImagen = document.getElementById("imagenNino");
    let ocultarTexto = document.getElementById("textoOculto");
    ocultarImagen.style.display = "none";
    ocultarTexto.style.display = "none";

    let mostrarTexto = document.getElementById("mostrarCaja");
    mostrarTexto.style.display = "block";

    let mostrarCopiar = document.getElementById("botonMostrar");
    mostrarCopiar.style.display = "block";
   
    

    // mostrarTexto.value = texto;

    textoEncriptar.value = "";

    

    // alert(pruebaTexto.replaceAll("a","ai"));
    var textoE = "";
    for(z = 0; z < texto.length; z++){
        // alert(pruebaTexto[z]);

        switch(texto[z]){
            case "a":
                textoE = textoE + "ai"; 
                break;
            case "e":
                textoE = textoE + "enter"; 
                break;
            case "i":
                textoE = textoE + "imes"; 
                break;
            case "o":
                textoE = textoE + "ober"; 
                break;
            case "u":
                textoE = textoE + "ufat"; 
                break;
            default:
                textoE = textoE + texto[z];
        }

        
    }
   mostrarTexto.value = textoE;

}


function copiarTexto(){
    let textoCopiar = document.getElementById("mostrarCaja");
    let textoC = textoCopiar.value;

    navigator.clipboard.writeText(textoC);
    

}


function desencriptarTexto(){
    
    let textoEncriptar = document.getElementById("texto-encriptar");
    let texto = textoEncriptar.value;

    let ocultarImagen = document.getElementById("imagenNino");
    let ocultarTexto = document.getElementById("textoOculto");
    ocultarImagen.style.display = "none";
    ocultarTexto.style.display = "none";

    let mostrarTexto = document.getElementById("mostrarCaja");
    mostrarTexto.style.display = "block";

    let mostrarCopiar = document.getElementById("botonMostrar");
    mostrarCopiar.style.display = "block";

    

    let matrizCodigo =[["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

    for(i=0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][1])){
            texto = texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    mostrarTexto.value = texto;

    
   
}