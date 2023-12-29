function mostrarPromocao() {
    var inMed = document.getElementById("inMed")
    var inPreco = document.getElementById("inPreco")
    var outProd = document.getElementById("outProd")
    var outValue = document.getElementById("outValue")

    var medicamento = inMed.value
    var preco = Number(inPreco.value)

    var leve2 =  parseInt(preco) * 2

    outProd.textContent = `Promoção de ${medicamento}`
    outValue.textContent = `Leve 2 por apenas R$: ${leve2.toFixed(2)}`
}

var btMostrarPromocao = document.getElementById("btMostrar")
btMostrarPromocao.addEventListener("click", mostrarPromocao)