var numContas = 0
var valTotal = 0

function registraConta() {
    numContas++
    var inDescricao = document.getElementById("inDescricao")
    var inValor = document.getElementById("inValor")
    var outListaContas = document.getElementById("outListaContas")
    var outTotal = document.getElementById("outTotal")

    var desc = inDescricao.value
    var valor = Number(inValor.value)

    if (valor == 0 || isNaN(valor)) {
        alert("Informe um número  válido...")
        inValor.focus()
        return
    } 

    valTotal += valor
    outListaContas.textContent += `${desc} - R$: ${valor}\n`

    outTotal.textContent = `-----------------------------`
    outTotal.textContent += `\n${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`


}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click",registraConta)