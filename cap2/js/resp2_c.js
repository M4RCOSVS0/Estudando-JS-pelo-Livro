function promocaoSuper(){
    var inProduto = document.getElementById("inProduto")
    var inPreco = document.getElementById("inPreco")
    var outValor1 = document.getElementById("outValor1")
    var outValor2 = document.getElementById("outValor2")

    var produto = inProduto.value
    var preco = Number(inPreco.value)
    var promo = (preco * 0.5)
    var valor = (preco * 2+ promo)
    outValor1.textContent = `${produto} - Promoção: leve 3 por R$: ${valor.toFixed(2)}`
    outValor2.textContent = `O 3º Produto custa apenas R$: ${promo.toFixed(2)}`
}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", promocaoSuper)