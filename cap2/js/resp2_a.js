function promocaoFarmacia(){
    var inMed = document.getElementById("inMed")
    var inPreco = document.getElementById("inPreco")
    var outValor1 = document.getElementById("outValor1")
    var outValor2 = document.getElementById("outValor2")

    var medi = inMed.value
    var preco = Number(inPreco.value)

    var valor = (Math.floor(preco) * 2).toFixed(2)

    outValor1.textContent = `Promoção de ${medi}`
    outValor2.textContent = `Leve 2 por apenas R$: ${valor}`
}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", promocaoFarmacia)