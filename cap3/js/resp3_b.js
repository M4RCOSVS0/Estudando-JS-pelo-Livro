function verificaMulta(){
    var inPermitida = document.getElementById("inPermitida")
    var inCondutor = document.getElementById("inCondutor")
    var outValue = document.getElementById("outValue")

    var permitida = Number(inPermitida.value)
    var condutor = Number(inCondutor.value)

    if(condutor <= permitida ){
        outValue.textContent = `Situação: Sem Multa`
    }else if (condutor <= (permitida * 0.20) + permitida){
        outValue.textContent = `Situação: Multa Leve`
    }else{
        outValue.textContent = `Situação: Multa Grave`
    }
}
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", verificaMulta)