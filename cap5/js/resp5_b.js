var numeros = []
function adicionarNumero() {
    var inNum = document.getElementById("inNum")
    var outLista = document.getElementById("outLista")

    var num = Number(inNum.value)

    if(num == 0 || isNaN(num) || numeros.indexOf(num) != -1){
        alert("Informe um número!")
        inNum.focus()
        return;
    }

    numeros.push(num)

    outLista.textContent = "Números: "
    for (let i = 0; i < numeros.length; i++) {
        if (i > 0) {
            outLista.textContent += ","
        }
        outLista.textContent += `${numeros[i]}`
    }

    inNum.value = ""
    inNum.focus()
}

var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarNumero)

function VerificarNumero(){

    if (numeros.length == 0) {
        alert("Lista sem valores!")
    }

    var outInOrd = document.getElementById("outInOrd")
    let copnum = [...numeros]
    var bol = true
    copnum.sort((a, b) => a - b);

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] != copnum[i]) {
            bol = false
        }
    }

    if (bol) {
        outInOrd.textContent = "OK! Números estão em ordem crescente"
    }else{
        outInOrd.textContent = "Atenção... Números não estão em ordem crescente"
    }
}
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", VerificarNumero)
