function ePerfeito() {
    var inNumero = document.getElementById("inNumero")
    var outDivisores = document.getElementById("outDivisores")
    var outPerfeito = document.getElementById("outPerfeito")

    var numero = Number(inNumero.value)

    if ((numero == 0 || isNaN(numero))){
        alert("Informe um número  válido...")
        inNumero.focus()
        return
    } 
    var divisores = 0
    outDivisores.textContent = `Divisores do ${numero}: `
    for (let i = 1; i <= numero/2; i++){
        if (numero %  i == 0) {
            if (divisores == 0) {
                outDivisores.textContent += `${i}`
            }else{
                outDivisores.textContent += `, ${i}`
            }
            divisores += i
        }
    }
    outDivisores.textContent += ` (Soma: ${divisores})`
    if (divisores = numero) {
        outPerfeito.textContent = `${numero} é um Número Perfeito` 
    }
}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click",ePerfeito)