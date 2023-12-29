function simulaParquimetro() {
    var inValue = document.getElementById("inValue")
    var outTempo = document.getElementById("outTempo")
    var outTroco = document.getElementById("outTroco")

    var valor = Number(inValue.value)

    if (isNaN(valor) || valor == '' || valor <= 1.0) {
        alert("Valor insufuciente!")
        inValue.focus();
        return
    }
    outTempo.textContent = "tempo:"
    if (valor < 1.75) {
        outTempo.textContent += "30 min"
        valor -= 1.00
    }else if(valor < 3.00){
        outTempo.textContent += "60 min"
        valor -= 1.75
    }else{
        outTempo.textContent += "120 min"
        valor -= 3.00
    }

    if (valor > 0) {
        outTroco.textContent = `Troco R$: ${valor}`
    }else{
        outTroco.textContent = ``
    }

}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click",simulaParquimetro)
