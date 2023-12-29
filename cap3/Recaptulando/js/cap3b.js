function verificaVelocidade() {
    var inPermitida = document.getElementById("inPermitida")
    var inCondutor = document.getElementById("inCondutor")
    var outResposta = document.getElementById("outResposta")

    var permitida = Number(inPermitida.value)
    var condutor = Number(inCondutor.value)

    if ((isNaN(permitida)||permitida == '')||(isNaN(condutor)||condutor == '')) {
        alert("Informe um valor válido!")
        inCondutor.focus();
        inPermitida.focus();
        return
    }
    outResposta.textContent = `Situação `
    if (condutor <= permitida) {
        outResposta.textContent += `Sem Multa`
    }else if(condutor <= permitida*1.2){
        outResposta.textContent += `Multa Leve`
    }else{
        outResposta.textContent += `Multa Grave`
    }
}

var btResulado = document.getElementById("btResultado")
btResulado.addEventListener("click",verificaVelocidade)