function valparquimetro(){
    var inValor = document.getElementById("inValor")
    var outTempo = document.getElementById("outTempo")
    var outTroco = document.getElementById("outTroco")

    var valor = Number(inValor.value)
    
    if(valor < 1){
        alert("Valor Insuficiente (no mínimo, R$ 1.00)")
    }else if(valor <= 1.75){
        outTempo.textContent = `Tempo: 30 min`
        outTroco.textContent = `Troco R$: ${(valor - 1.00).toFixed(2)}`
    }else if(valor <= 3.00){
        outTempo.textContent = `Tempo: 60 min`
        outTroco.textContent = `Troco R$: ${(valor - 1.75).toFixed(2)}`
    }else{
        outTempo.textContent = `Tempo: 120 min`
        outTroco.textContent = `Troco R$: ${(valor - 3.00).toFixed(2)}`
    }
}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", valparquimetro)