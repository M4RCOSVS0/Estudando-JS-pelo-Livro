function preencherEspaco() {
    var inNumero = document.getElementById("inNumero")
    var outSimbolo = document.getElementById("outSimbolo")
    
    var numero = Number(inNumero.value)
    
    if (isNaN(numero) || numero == 0) {
        alert("Informe um número  válido...")
        inNumero.focus()
        return
    } 

    var estrelas = ''

    for (let i = 0; i < numero; i++) {
        if (i % 2 == 0) {
            estrelas += `*`
        }else{
            estrelas += `-`
        }
    }

    outSimbolo.textContent = `${estrelas}`
}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click",preencherEspaco)