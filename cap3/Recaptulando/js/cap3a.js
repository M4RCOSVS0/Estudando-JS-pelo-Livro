function parOuImpar() {
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var numero = Number(inNumero.value)

    if (isNaN(numero)||numero == '') {
        alert("Informe um valor válido!")
        inNumero.focus();
        return
    }
    outResposta.textContent = `Resposta: ${numero} é `
    if (numero%2==0) {
        outResposta.textContent += `Par`
    }else{
        outResposta.textContent += `Impar`
    }
}

var btResulado = document.getElementById("btResultado")
btResulado.addEventListener("click",parOuImpar)