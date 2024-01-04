function contarChinchila() {
    var inChinchila = document.getElementById("inChinchila")
    var inAnos = document.getElementById("inAnos")
    var outConta = document.getElementById("outConta")

    var chinchila = Number(inChinchila.value)
    var anos = Number(inAnos.value)

    if ((chinchila == 0 || isNaN(chinchila))||(anos == 0 || isNaN(anos))) {
        alert("Informe um número  válido...")
        inAnos.focus()
        inAnos.focus()
        return
    } 
    outConta.textContent = ""
    for (let i = 1; i <= anos; i++) {
        outConta.textContent += `${i}º Ano: ${chinchila*i} Chinchilas\n`   
    }

}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click",contarChinchila)