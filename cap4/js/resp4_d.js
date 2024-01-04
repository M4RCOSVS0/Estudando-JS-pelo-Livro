function ePerfeito() {
    var inNumero = document.getElementById("inNumero")
    var outEstrelas = document.getElementById("outEstrelas")

    var numero = Number(inNumero.value)

    if ((numero == 0 || isNaN(numero))){
        alert("Informe um número  válido...")
        inNumero.focus()
        return
    } 
    for (let i = 1; i <= numero; i++) {
        for (let j = 0; j < i; j++) {
            outEstrelas.innerHTML += "*"
        }
        outEstrelas.innerHTML += "<br>"
    }
}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click",ePerfeito)