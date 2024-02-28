const campoTexto = document.querySelector("#campoEntrada");
const campoMensaje = document.querySelector("#campoSalida");

const matrizTextMod = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];


//Encriptar
function btnEncriptar(){
    const textoEntrada = eventEncriptar(campoTexto.value);
    campoMensaje.value = textoEntrada;
}

// Desencriptar
function btnDesencriptar(){
    const textoEntrada = eventDesencriptar(campoTexto.value);
    campoMensaje.value = textoEntrada;
}

//Encriptar
function eventEncriptar(textoaEncriptar){
    for (let i = 0; i < matrizTextMod.length; i++) {
        if (textoaEncriptar.includes(matrizTextMod[i][0])){
            textoaEncriptar = textoaEncriptar.replaceAll(
                matrizTextMod[i][0],
                matrizTextMod[i][1]
            );
        }
    }
    return textoaEncriptar;
}

// Desencriptar
function eventDesencriptar(textoaEncriptar){
    for (let i = 0; i < matrizTextMod.length; i++) {
        if (textoaEncriptar.includes(matrizTextMod[i][1])){
            textoaEncriptar = textoaEncriptar.replaceAll(
                matrizTextMod[i][1],
                matrizTextMod[i][0]
            );
        }
    }
    return textoaEncriptar;
}

