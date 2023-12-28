function verPromocao() {
    var inProd = document.getElementById("inProd")
    var inPreco = document.getElementById("inPreco")
    var outProd = document.getElementById("outProd")
    var outPromo = document.getElementById("outPromo")

    var produto = inProd.value
    var preco = Number(inPreco.value)

    var promocional = Number(preco/2)

    outProd.textContent = `${produto} - Promoção: Leve 3 por R$${(preco * 2 + promocional).toFixed(2)}`
    outPromo.textContent = `O 3° produto cutsa apenas R$:${promocional.toFixed(2)}`
}

var btVerPromocao = document.getElementById("btVerPromocao")
btVerPromocao.addEventListener("click",verPromocao)