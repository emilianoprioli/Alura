
function encriptar(){
    let input = document.getElementById("myInput").value;
    let encriptado = input.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat")
    let parrafo = document.getElementById("parrafo")
    parrafo.style.display = "none"
    let img = document.getElementById("img")
    img.style.display = "none"
    let desencriptador = document.getElementById("output-container")
    desencriptador.style.alignContent= "center"
    document.getElementById("p").innerHTML = encriptado
    console.log(encriptado)
}

function desencriptar(){
    let input = document.getElementById("myInput").value;
    let desencriptado = input.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u")
    let parrafo = document.getElementById("parrafo")
    parrafo.style.display = "none"
    let img = document.getElementById("img")
    img.style.display = "none"
    let desencriptador = document.getElementById("output-container")
    desencriptador.style.alignContent= "center"
    document.getElementById("p").innerHTML = desencriptado
    console.log(encriptado)
}


function copiar() {
    var aCopiar = document.getElementById('myInput').value
    navigator.clipboard.writeText(aCopiar)
    .then(() => {
        alert("Texto copiado con éxito")
    })
    .catch(() => {
        alert("Algo salió mal")
    })
}

