function repetirFruta() {
    var inFruta = document.getElementById("inFruta")
    var inValor = document.getElementById("inValor")
    var outConta = document.getElementById("outConta")

    var fruta = inFruta.value
    var valor = Number(inValor.value)

    if (valor == 0 || isNaN(valor)) {
        alert("Informe um número  válido...")
        inValor.focus()
        return
    } 
    var fruit = ""
    for (let i = 1; i <= valor; i++) {
        if (i != valor) {
            fruit += fruta + " * "
        }else{
            fruit += fruta
        }
        outConta.textContent = `${fruit}`
    }

}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click",repetirFruta)